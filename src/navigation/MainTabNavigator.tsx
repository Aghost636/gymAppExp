import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

// Placeholder screens - we'll build these later
const LeaderboardScreen = () => (
  <View style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: '#fff'}}>Leaderboard Coming Soon!</Text>
  </View>
);

const ScheduleScreen = () => (
  <View style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: '#fff'}}>Schedule Coming Soon!</Text>
  </View>
);

const SocialScreen = () => (
  <View style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: '#fff'}}>Social Feed Coming Soon!</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: '#fff'}}>Profile Coming Soon!</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopColor: '#00BFFF',
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: '#00BFFF',
        tabBarInactiveTintColor: '#666',
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Leaderboard') iconName = focused ? 'podium' : 'podium-outline';
          if (route.name === 'Schedule') iconName = focused ? 'calendar' : 'calendar-outline';
          if (route.name === 'Social') iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Fitness For Life'
        }}
      />
      <Tab.Screen 
        name="Leaderboard" 
        component={LeaderboardScreen}
      />
      <Tab.Screen 
        name="Schedule" 
        component={ScheduleScreen}
      />
      <Tab.Screen 
        name="Social" 
        component={SocialScreen}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;