import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Typography = ({ text, fontWeight, fontSize }) => {
  const fontWeightValue = getFontWeight(fontWeight);
  const fontHeightValue = getFontHeight(fontSize);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const getFontWeight = (weight) => {
  switch (weight) {
    case "medium":
      return "500";
    case "semi":
      return "600";
    case "bold":
      return "700";
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
    textAlign: "center",
    fontStyle: "normal",
  },
});

export default Typography;
