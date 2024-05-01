import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthContext } from "../../context/AuthContext";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";

interface AuthNavigationProps {
  route: any;
  navigation: any;
}

const Stack = createNativeStackNavigator();

export default function AuthNavigation({
  route,
  navigation,
}: AuthNavigationProps) {
  const { userToken } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName={userToken ? "WelcomeScreen" : "LoginScreen"}
    >
      <Stack.Screen options={{ headerShown: false }} name="WelcomeScreen">
        {(props) => <WelcomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="LoginScreen">
        {(props) => <LoginScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="RegisterScreen">
        {(props) => <RegisterScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
