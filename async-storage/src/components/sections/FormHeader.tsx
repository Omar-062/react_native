import React from "react";
import { View, StyleSheet } from "react-native";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import { ButtonText } from "../reusables/StyledTypography";
import { H1 } from "../reusables/StyledTypography";
import { Colors } from "../unknown/Colors";

type Props = {
  text: string;
  route?: any;
  navigation?: any;
};

const FormHeader = ({ text, navigation }: Props) => {
  const onPress = () => {
    if (text === "Log In") {
      navigation.navigate("RegisterScreen");
      console.log("pressed");
    } else if (text === "Sign Up") {
      navigation.navigate("LoginScreen");
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.sideContainer, styles.leftContainer]}>
        <ChevronLeftIcon />
      </View>

      <H1 children={text} />

      <View style={[styles.sideContainer, styles.rightContainer]}>
        <ButtonText
          onPress={onPress}
          color={Colors.green}
          children={text === "Log In" ? "Register" : "Login"}
        />
      </View>
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
  sideContainer: {
    height: 42,
    width: 100,
    justifyContent: "center",
  },
  leftContainer: {
    alignItems: "flex-start",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
});

export default FormHeader;
