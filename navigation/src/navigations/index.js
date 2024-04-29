import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LogInScreen from "../screens/LogInScreen";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LogInScreen"
        component={LogInScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
