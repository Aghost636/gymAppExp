import { Account, Client, ID } from 'appwrite';
import 'react-native-url-polyfill/auto';

const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('688f958e00197ace2844');

export const account = new Account(client);

// Simple function to create a user
export const createUser = async (email, password, name) => {
    try {
       const newUser = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
        console.log('User created successfully:', newUser);
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Simple function to sign in
export const signIn = async (email, password) => {
    try {
       const session = await account.createEmailPasswordSession(email, password);
        console.log('Sign in successful:', session);
        return session;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};
export const signOut = async () => {
    try {
        await account.deleteSession('current');
        console.log('Logged out successfully');
    } catch (error) {
        console.error('Logout error:', error);
    }
};
// Check current user
export const getCurrentUser = async () => {
    try {
        const user = await account.get();
        return user;
    } catch (error) {
        console.log('No user logged in');
        return null;
    }
};

// Reset password function
export const resetPassword = async (email) => {
    try {
        const recovery = await account.createRecovery(
            email,
            'https://yourapp.com/reset-password' // This would be your app's reset URL
        );
        console.log('Password reset email sent:', recovery);
        return recovery;
    } catch (error) {
        console.error('Error sending reset email:', error);
        throw error;
    }
};