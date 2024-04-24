import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextButton from "../components/TextButton";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const LogInPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Header text={"Log In"} />

        <View style={styles.innerContainer}>
          <Input text="Email" />
          <Input text="Password" />
        </View>
      </View>

      <View style={styles.innerContainer}>
        <Button text="Log In" />
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
    justifyContent: "center",
    gap: 16,
    marginVertical: 16,
  },
});

export default LogInPage;
