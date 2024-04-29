import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const CustomInput = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput style={styles.inputText} placeholder={text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    paddingHorizontal: 16,
  },
  inputText: {
    flex: 1,
    color: "#000000",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
  },
});

export default CustomInput;
