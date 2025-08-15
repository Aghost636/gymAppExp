import React, { useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { signIn, signOut } from '../appwrite';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const session = await signIn(email, password);
      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate('MainApp');
      console.log('Login successful:', session);
      setEmail('');
      setPassword('');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to log in');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
             {/* <Image 
  source={logo} 
  style={styles.logo}
  resizeMode="contain"
/>*/}
        <Text style={styles.title}>Lets Get Started</Text>
        <Text style={styles.subtitle}>Log in to your account</Text>
        
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        <Button 
          title={isLoading ? "Logging in..." : "Log In"} 
          onPress={handleLogin}
          disabled={isLoading}
        />
        
        <TouchableOpacity 
          style={styles.linkButton} 
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.linkText}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
        <Button 
  title="Logout (Clear Session)" 
  onPress={signOut}
  color="red"
/>
        <TouchableOpacity 
          style={styles.linkButton}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    fontWeight: 'bold',
      textAlign: 'center',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00BFFF',
    borderRadius: 8,
    padding: 12,
      marginBottom: 16,
    color: '#fff',
  },
  linkButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#007AFF',
      fontSize: 16,
  },
});

export default LoginScreen;