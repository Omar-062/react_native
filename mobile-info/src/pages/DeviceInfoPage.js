import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Alert,
  Dimensions,
  Platform,
  Linking,
} from "react-native";
import { modelName, brand } from "expo-device";

const DeviceInfoPage = () => {
  const showAlert = () => {
    const { width, height } = Dimensions.get("window");

    Alert.alert(
      "Device Information",
      `Brand: ${brand}\nmodel: ${modelName}\nOS: ${Platform.OS}\nWidth: ${width}\nHeight: ${height}`
    );
  };

  const makeCall = () => {
    Linking.openURL("tel:+994708659422");
  };

  return (
    <View style={styles.container}>
      <Button title="Show Device Info" onPress={showAlert} />
      <Button title="Make a Call" onPress={makeCall} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    gap: 8,
  },
});

export default DeviceInfoPage;
