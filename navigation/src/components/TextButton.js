import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TextButton = ({ text, fontWeight, fontSize, onPress }) => {
  const fontWeightValue = getFontWeight(fontWeight);
  const fontHeightValue = getFontHeight(fontSize);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text
        style={[
          styles.text,
          { fontWeight: fontWeightValue },
          { lineHeight: fontHeightValue },
          { fontSize: fontSize },
        ]}
      >
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
    case "bold":
      return "500";
    default:
      return "500";
  }
};

const getFontHeight = (lineHeight) => {
  switch (lineHeight) {
    case 16:
      return 24;
    case 22:
      return 33;
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  text: {
    color: "#0E6565",
    fontStyle: "normal",
  },
});

export default TextButton;
