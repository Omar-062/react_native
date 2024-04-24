import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Linking } from "react-native";
import TextButton from "../components/TextButton";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";

//import Header from "../components/Header";

const LogInPage = () => {
  const handleForgotPassword = () => {
    const supportEmail = "support@example.com";

    const subject = "Password Recovery";
    const body = "Help to recover my password.";

    const emailUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(emailUrl);
  };
  return (
    <Layout title={"Log In"}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.innerContainer}>
            <Input text="Email" />
            <Input text="Password" />
          </View>
        </View>

        <View style={styles.innerContainer}>
          <Button text="Log In" />
          <TextButton
            text="Forgot your password?"
            fontWeight="semi"
            onPress={handleForgotPassword}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
