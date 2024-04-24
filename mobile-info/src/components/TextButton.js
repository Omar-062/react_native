import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TextButton = ({ text, fontWeight, onPress }) => {
  const fontWeightValue = getFontWeight(fontWeight);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.greenText, { fontWeight: fontWeightValue }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const getFontWeight = (weight) => {
  switch (weight) {
    case "medium":
      return "500";
    case "semi":
      return "600";
    default:
      return "500";
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  greenText: {
    color: "#5DB075",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 19,
  },
});

export default TextButton;
