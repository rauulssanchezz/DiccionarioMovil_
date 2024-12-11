import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin-page';
import Header from './components/shared/header';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">
                <Stack.Screen name="MainPage" component={MainPage} options={({ navigation }) => ({
                    headerTitle: () => <Header navigation={navigation} />
                })} />
                <Stack.Screen name="LoginPage" component={LoginPage} options={({ navigation }) => ({
                    headerTitle: () => <Header navigation={navigation} />
                })} />
                <Stack.Screen name="AdminPage" component={AdminPage} options={({ navigation }) => ({
                    headerTitle: () => <Header navigation={navigation} />
                })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}