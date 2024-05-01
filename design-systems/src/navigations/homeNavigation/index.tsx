import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../../screens/CategoryScreen";
import HomeScreen from "../../screens/HomeScreen";
import ProductScreen from "../../screens/ProductScreen";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
