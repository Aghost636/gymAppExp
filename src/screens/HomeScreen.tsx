import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [currentStreak, setCurrentStreak] = useState(7); // Example streak
  const [restDayShields, setRestDayShields] = useState(2); // Example shields
  const [username] = useState('IronWarrior23'); // Example username

  const handleCheckIn = () => {
    // TODO: Connect to barcode scanner
    Alert.alert('Check-in Successful!', `Welcome back, ${username}! 🔥`);
    // TODO: Update streak, show animation
  };

  const handleCustomWorkouts = () => {
    Alert.alert('Coming Soon', 'Custom workouts feature coming soon!');
  };

  const handleTrainerWorkouts = () => {
    Alert.alert('Coming Soon', 'Trainer workouts feature coming soon!');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.usernameText}>{username}!</Text>
      </View>

      {/* Streak Display */}
      <View style={styles.streakContainer}>
        <Text style={styles.streakLabel}>Current Streak</Text>
        <Text style={styles.streakNumber}>{currentStreak} 🔥</Text>
        <View style={styles.shieldsContainer}>
          <Text style={styles.shieldsText}>
            Rest Day Shields: {restDayShields} 🛡️
          </Text>
        </View>
      </View>

      {/* Check-in Button */}
      <TouchableOpacity style={styles.checkInButton} onPress={handleCheckIn}>
        <Text style={styles.checkInButtonText}>📱 SCAN TO CHECK IN</Text>
        <Text style={styles.checkInSubtext}>Tap to use barcode scanner</Text>
      </TouchableOpacity>

      {/* Workout Buttons */}
      <View style={styles.workoutSection}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <TouchableOpacity 
          style={styles.workoutButton} 
          onPress={handleCustomWorkouts}
        >
          <Text style={styles.workoutButtonText}>💪 My Custom Workouts</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.workoutButton} 
          onPress={handleTrainerWorkouts}
        >
          <Text style={styles.workoutButtonText}>🏋️ Trainer Workouts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 18,
    color: '#fff',
  },
  usernameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00BFFF',
  },
  streakContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00BFFF',
  },
  streakLabel: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 10,
  },
  streakNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  shieldsContainer: {
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  shieldsText: {
    fontSize: 14,
    color: '#00BFFF',
  },
  checkInButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 15,
    padding: 25,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  checkInButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  checkInSubtext: {
    fontSize: 14,
    color: '#333',
  },
  workoutSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  workoutButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  workoutButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;