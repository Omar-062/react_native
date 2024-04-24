import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextButton from "../components/TextButton";
import CloseIcon from "../icons/CloseIcon";

const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <CloseIcon />
      
      <Text style={styles.headerText}>{text}</Text>
      {text === "Log In" ? (
        <TextButton text={"register"} fontWeight={"medium"} />
      ) : text === "Sign Up" ? (
        <TextButton text={"login"} fontWeight={"medium"} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 60,
    marginBottom: 16,
  },

  headerText: {
    color: "#000000",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 36,
  },
  
});

export default Header;
