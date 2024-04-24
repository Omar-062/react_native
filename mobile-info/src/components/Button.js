import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Button = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    backgroundColor: "#5DB075",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 19,
  },
});

export default Button;
