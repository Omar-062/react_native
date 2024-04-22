import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Typography from "./Typography";

const CustomButton = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Typography
        style={styles.text}
        text={text}
        color={"#FFFFFF"}
        fontWeight={700}
        fontSize={16}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#4A3780",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 19,
  },
});

export default CustomButton;
