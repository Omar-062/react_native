import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MarketPage from "./src/pages/MarketPage";
import FeedPage from "./src/pages/FeedPage";
import ContentPage from "./src/pages/ContentPage";

export default function App() {
  return (
    <View style={styles.container}>
      <ContentPage />
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
