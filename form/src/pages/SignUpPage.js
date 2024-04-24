import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextButton from "../components/TextButton";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import CheckBoxIcon from "../icons/CheckBoxIcon";

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Header text={"Sign Up"} />

        <View style={styles.innerContainer}>
          <Input text="Name" />
          <Input text="Email" />

          <Input text="Password" />
        </View>

        <View style={styles.innerRowContainer}>
          <CheckBoxIcon />
          <Text style={styles.text}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <Button text="Sign Up" />
        <TextButton text="Forgot your password?" fontWeight="semi" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    marginVertical: 8,
  },
  innerRowContainer: {
    width: "100%",

    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 8,
  },
  text: {
    color: "#666666",
  },
});

export default SignUpPage;
