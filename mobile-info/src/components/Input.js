import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TextButton from "./TextButton";

const Input = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput style={styles.inputText} placeholder={text} />
        {text === "Password" && <TextButton text="Show" fontWeight="medium" />}
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
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputText: {
    flex: 1,
    color: "#BDBDBD",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
  },
});

export default Input;
