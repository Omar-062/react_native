import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TextButton = ({ text, fontWeight }) => {
  const fontWeightValue = getFontWeight(fontWeight);

  return (
    <View style={styles.container}>
      <Text style={[styles.greenText, { fontWeight: fontWeightValue }]}>
        {text}
      </Text>
    </View>
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
