import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

// Placeholder screens - we'll build these later
const LeaderboardScreen = () => (
  <div style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
    <h2 style={{color: '#fff'}}>Leaderboard Coming Soon!</h2>
  </div>
);

const ScheduleScreen = () => (
  <div style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
    <h2 style={{color: '#fff'}}>Schedule Coming Soon!</h2>
  </div>
);

const SocialScreen = () => (
  <div style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
    <h2 style={{color: '#fff'}}>Social Feed Coming Soon!</h2>
  </div>
);

const ProfileScreen = () => (
  <div style={{flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}>
    <h2 style={{color: '#fff'}}>Profile Coming Soon!</h2>
  </div>
);

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
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
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <span style={{color}}>🏠</span>,
          title: 'Fitness For Life'
        }}
      />
      <Tab.Screen 
        name="Leaderboard" 
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({ color }) => <span style={{color}}>📊</span>,
        }}
      />
      <Tab.Screen 
        name="Schedule" 
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ color }) => <span style={{color}}>📅</span>,
        }}
      />
      <Tab.Screen 
        name="Social" 
        component={SocialScreen}
        options={{
          tabBarIcon: ({ color }) => <span style={{color}}>📱</span>,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <span style={{color}}>👤</span>,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;