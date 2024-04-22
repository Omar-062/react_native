import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Typography from "./Typography";

const CustomInput = ({ icon: Icon, text, value, setValue }) => {
  return (
    <View style={styles.container}>
      <Typography
        style={styles.inputTitleText}
        text={text}
        color={"#1B1B1D"}
        fontWeight={600}
        fontSize={14}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputInnerContainer}
          placeholder={text}
          value={value}
          onChangeText={setValue}
        />
        {Icon && <Icon style={styles.icon} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 78,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 8,
  },
  inputContainer: {
    flex: 1,
    width: "100%",

    flexDirection: "row",

    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    paddingHorizontal: 18,
  },
  inputInnerContainer: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
});

export default CustomInput;
