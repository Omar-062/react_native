import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DeviceInfoPage from "./src/pages/DeviceInfoPage";
import LogInPage from "./src/pages/LogInPage";
import SignUpPage from "./src/pages/SignUpPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DeviceInfoPage /> */}
      <LogInPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
