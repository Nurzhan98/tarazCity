import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CrimeMap } from "../screens/CrimeMap";
import { ServicesCityScreen } from "../screens/ServicesCityScreen";
import { SecureCityScreen } from "../screens/SecureCityScreen";
import { SecureSchool } from "../screens/SecureSchool";

const HomeStack = createStackNavigator();

export const SecureCityNavigator = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Main" component={ SecureCityScreen } />
      <HomeStack.Screen name="CrimeMap" component={ CrimeMap } />
      <HomeStack.Screen name="SecureSchool" component={ SecureSchool } />
    </HomeStack.Navigator>
  );