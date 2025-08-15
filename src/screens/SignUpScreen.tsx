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
    View,
} from 'react-native';
import { createUser } from '../appwrite';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Basic username validation: 3-15 chars, letters, numbers, underscore
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!usernameRegex.test(username)) {
      Alert.alert('Error', 'Username must be 3-15 characters and use letters, numbers, or underscores.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const user = await createUser(email, password, username);
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login')
      console.log('User created:', user);
      // Reset form
      setEmail('');
      setPassword('');
      setUsername('');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to create account');
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        
        <TextInput
          placeholder="Username"
          placeholderTextColor="#888"
          style={styles.input}
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />
        
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
          title={isLoading ? "Creating Account..." : "Create Account"} 
          onPress={handleSignUp}
          disabled={isLoading}
        />
        
        <TouchableOpacity 
          style={styles.linkButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.linkText}>
            Already have an account? Log in
          </Text>
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
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00BFFF',
    borderRadius: 8,
    padding: 12,
      marginBottom: 16,
      color: '#fff',
    backgroundColor: '#000',
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

export default SignUpScreen;