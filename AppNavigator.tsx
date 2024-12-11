import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin-page';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">
                <Stack.Screen name="MainPage" component={MainPage} options={{ title: 'Home' }} />
                <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Login' }} />
                <Stack.Screen name="AdminPage" component={AdminPage} options={{ title: 'Admin' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
