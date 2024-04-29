import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import Typography from "../components/Typography";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";

const WelcomeScreen = ({ navigation }) => {
  const handleNavigateToRegister = () => {
    navigation.navigate("SignUpScreen");
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../images/WelcomePageImage.png")}
          contentFit="cover"
        />

        <View style={styles.textsContainer}>
          <Typography
            style={styles.text}
            text={"Gets things done with to do"}
            fontWeight={"bold"}
            fontSize={22}
          />

          <Typography
            style={styles.text}
            text={"Lorem ipsum dolor sit amet consectetur. Enim."}
            fontWeight={"semi"}
            fontSize={16}
          />
        </View>

        <CustomButton
          style={styles.buttonContainer}
          text={"Get Started"}
          onPress={handleNavigateToRegister}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 98,
    gap: 64,
  },
  textsContainer: {
    gap: 58,
    marginHorizontal: 55,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
  image: {
    height: 239,
    width: 322,
    marginLeft: 78,
    marginRight: 30,
  },
});

export default WelcomeScreen;
