import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {AuthStackScreen} from './AuthNavigator'
import { DrawerNavigator } from "./DrawerNavigator";
 
const RootStack = createStackNavigator();
export const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={ DrawerNavigator }
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);