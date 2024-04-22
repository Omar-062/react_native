import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Typography = ({
  text,
  color,
  fontWeight,
  fontSize,
  textDecorationLine,
  textAlign,
}) => {
  const lineHeight = Math.round(fontSize * 1.1);
  
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          { color: color },
          { fontWeight: fontWeight },
          { fontSize: fontSize },
          { lineHeight: lineHeight },
          textDecorationLine && { textDecorationLine },
          textAlign && { textAlign },
        ]}
      >
        {text}
      </Text>
    </View>
  );
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
