import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../components/unknown/Colors";
import Background from "../components/unknown/Background";
import WelcomeContent from "../components/sections/WelcomeContent";

interface Props {
  route?: any;
  navigation?: any;
}

const WelcomeScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.whiteContainer}>
        <WelcomeContent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#7E19FF99",
  },

  whiteContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

    paddingTop: 64,
    paddingBottom: 16,
    paddingHorizontal: 20,

    gap: 48,
    backgroundColor: Colors.background,
  },
});

export default WelcomeScreen;
