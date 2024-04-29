import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./src/navigations/index";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEEAE8",
    alignItems: "center",
    justifyContent: "center",
  },
});
