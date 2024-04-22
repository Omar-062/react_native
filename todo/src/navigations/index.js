import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "../screens/MainScreen";
import NewTaskScreen from "../screens/NewTaskScreen";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="MainScreen"
        component={MainScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="NewTaskScreen"
        component={NewTaskScreen}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
