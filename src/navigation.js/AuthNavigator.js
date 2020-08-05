import React, {useState} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from '../context'
import { SignInScreen } from '../screens/SignInScreen'
import { CreateAccountScreen } from '../screens/CreateAccountScreen'

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={ SignInScreen }
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={ CreateAccountScreen }
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);