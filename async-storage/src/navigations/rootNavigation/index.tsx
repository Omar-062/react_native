import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from '../../context/AuthContext';

import AuthNavigation from "../authNavigation/index";
import BottomTabNavigation from "../bottomTabNavigation/index";
import WelcomeScreen from "../../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const { userToken } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {userToken ? (
        <>
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
