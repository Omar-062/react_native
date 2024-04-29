import React from "react";
import { Text, View, StyleSheet, Pressable  } from "react-native";

const CustomButton = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonStyle}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 52,
    alignItems: "center",
    backgroundColor: "#30A6AE",
  },
  text: {
    flex: 1,
    textAlignVertical: "center",
    color: "#DEEAE8",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
  },
});

export default CustomButton;
