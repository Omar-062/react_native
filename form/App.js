import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LogInPage from "./src/pages/LogInPage";
import SignUpPage from "./src/pages/SignUpPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LogInPage /> */}
      <SignUpPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
