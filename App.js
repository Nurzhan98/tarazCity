import React, {useState, useMemo} from 'react';
import { AppLoading } from 'expo'
import { StyleSheet, Text, View } from 'react-native';
import { bootstrap } from './src/bootstrap'
import { MainLayout } from './src/ui/MainLayout';
import { SignInScreen } from './src/screens/SignInScreen'
import { AuthContext } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";
import {RootStackScreen} from './src/navigation.js/RootStackScreen'
import { DrawerNavigator } from './src/navigation.js/DrawerNavigator';

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setUserToken("asdf");
      },
      signUp: () => {
        setUserToken("asdf");
      },
      signOut: () => {
        setUserToken(null);
      }
    };
  }, []);

  if(!isReady) {
    return (
      <AppLoading
      startAsync={ bootstrap }
      onFinish={() => setIsReady(true)}
      onError={(e) => console.log(e)}
      />
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
       <NavigationContainer>
          <RootStackScreen userToken={userToken} /> 
        </NavigationContainer>
   </AuthContext.Provider>
  )
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
