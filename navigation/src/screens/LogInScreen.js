import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import Typography from "../components/Typography";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import TextButton from "../components/TextButton";
import Layout from "../components/Layout";

const LogInScreen = ({ navigation }) => {
  const handleNavigateToRegister = () => {
    navigation.navigate("SignUpScreen");
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Typography
          style={styles.text}
          text={"Welcome back!"}
          fontWeight={"bold"}
          fontSize={22}
        />

        <Image
          style={styles.image}
          source={require("../images/LoginPageImage.png")}
          contentFit="cover"
        />

        <View style={styles.inputsContainer}>
          <CustomInput text={"Enter your email"} />
          <CustomInput text={"Enter your password"} />
        </View>

        <View style={styles.buttonsContainer}>
          <TextButton
            style={styles.textButtonContainer}
            text={"Forget Password"}
          />

          <CustomButton style={styles.buttonContainer} text={"Login"} />

          <View style={styles.textsContainer}>
            <Typography
              text={"Don't have an account ? "}
              fontWeight={"medium"}
              fontSize={12}
            />
            <TextButton text={"Sign Up"} onPress={handleNavigateToRegister} />
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
  },
  inputsContainer: {
    width: 360,
    gap: 18,
    marginHorizontal: 55,
    alignItems: "center",
    marginBottom: 80,
  },
  buttonsContainer: {
    width: 360,
    gap: 18,
    marginHorizontal: 55,
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
  image: {
    width: 320,
    height: 320,
    marginHorizontal: 55,
  },
  textsContainer: {
    flexDirection: "row",
  },
});

export default LogInScreen;
