import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SecureCityScreen } from "../screens/SecureCityScreen";
import { ServicesCityScreen } from "../screens/ServicesCityScreen";
import { NewsScreen } from "../screens/NewsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SecureCityNavigator } from "./SecureCityNavigator";

const Drawer = createDrawerNavigator()

export const DrawerNavigator = ({navigation}) => {
    return (
        <Drawer.Navigator initialRouteName="SecureCityScreen">
            <Drawer.Screen name="SecureCityScreen" component={ SecureCityNavigator } />
            <Drawer.Screen name="ServicesCityScreen" component={ ServicesCityScreen } />
            <Drawer.Screen name="NewsScreen" component={ NewsScreen} />
        </Drawer.Navigator>
    )
}