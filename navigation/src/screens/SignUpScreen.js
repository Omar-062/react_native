import React from "react";
import { View, StyleSheet } from "react-native";
import Typography from "../components/Typography";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import TextButton from "../components/TextButton";
import Layout from "../components/Layout";

const SignUpScreen = ({ navigation }) => {
  const handleNavigateToLogIn = () => {
    navigation.navigate("LogInScreen");
  };
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Typography
            style={styles.text}
            text={"Welcome Onboard"}
            fontWeight={"bold"}
            fontSize={22}
          />

          <Typography
            style={styles.text}
            text={"Let's help you meet up your tasks."}
            fontWeight={"medium"}
            fontSize={16}
          />
        </View>

        <View style={styles.inputsContainer}>
          <CustomInput text={"Enter your full name"} />
          <CustomInput text={"Enter your email"} />
          <CustomInput text={"Enter password"} />
          <CustomInput text={"Enter confirm password"} />
        </View>

        <View style={styles.inputsContainer}>
          <CustomButton style={styles.buttonContainer} text={"Register"} />

          <View style={styles.textsContainer}>
            <Typography
              text={"Already have an account ? "}
              fontWeight={"medium"}
              fontSize={12}
            />
            <TextButton text={"Sign In"} onPress={handleNavigateToLogIn} />
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 55,
    marginBottom: 60,
    gap: 80,
  },
  topContainer: {
    gap: 12,
  },
  inputsContainer: {
    width: 360,
    gap: 18,
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
  textsContainer: {
    flexDirection: "row",
  },
});

export default SignUpScreen;
