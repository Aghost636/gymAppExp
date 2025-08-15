import React, { useMemo, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createMyProfile, getAuthedUser, isUsernameAvailable } from "../services/profile";

const USERNAME_RX = /^[a-zA-Z0-9_]{3,16}$/;

export default function UsernameScreen({ navigation }: any) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const msg = useMemo(() => {
    if (!value) return "Pick a unique handle (3–16 chars).";
    if (!USERNAME_RX.test(value)) return "Only letters, numbers, underscores. 3–16 chars.";
    return "";
  }, [value]);

  const onSave = async () => {
    const handle = value.trim();
    if (!USERNAME_RX.test(handle)) return;
    try {
      setLoading(true);
      const user = await getAuthedUser();
      const ok = await isUsernameAvailable(handle);
      if (!ok) {
        Alert.alert("Username taken", "Try another one.");
        return;
        }
      await createMyProfile(user.$id, handle);
      // go to the app’s main area
      navigation.replace("MainTabs"); // adjust to your main tab route name
    } catch (e: any) {
      Alert.alert("Error", e?.message ?? "Could not save username.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.h1}>Choose your username</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={setValue}
        placeholder="e.g. IronWarrior23"
        style={styles.input}
      />
      {!!msg && <Text style={styles.help}>{msg}</Text>}

      <TouchableOpacity
        disabled={loading || !USERNAME_RX.test(value)}
        onPress={onSave}
        style={[styles.btn, (loading || !USERNAME_RX.test(value)) && styles.btnDisabled]}
      >
        {loading ? <ActivityIndicator /> : <Text style={styles.btnText}>Save</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, padding: 24, justifyContent: "center", gap: 12 },
  h1: { fontSize: 24, fontWeight: "700" },
  input: { borderWidth: 1, borderColor: "#999", borderRadius: 10, padding: 12, fontSize: 16 },
  help: { color: "#666" },
  btn: { marginTop: 8, padding: 14, borderRadius: 12, alignItems: "center", borderWidth: 1 },
  btnDisabled: { opacity: 0.5 },
  btnText: { fontWeight: "700", fontSize: 16 },
});
