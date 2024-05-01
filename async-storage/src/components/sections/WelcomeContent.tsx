import React from "react";
import { StyleSheet, View } from "react-native";
import { H1 } from "../../components/reusables/StyledTypography";
import { PrimaryButton } from "../../components/reusables/StyledButton";
import { ButtonText } from "../reusables/StyledTypography";
import { Colors } from "../unknown/Colors";

const WelcomeContent = () => {
  return (
    <View style={styles.container}>

      <H1 children={"Non-Contact Deliveries"} textAlign={"center"} />      

      <View style={styles.buttonsContainer}>
        <PrimaryButton height={56} width={"100%"}>
          <ButtonText children={"ORDER NOW"} />
        </PrimaryButton>
        <ButtonText children={"DISMISS"} color={Colors.white} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    gap: 24,
  },

  buttonsContainer: {
    width: "100%",
    gap: 32,
    alignItems: "center",
  },
});

export default WelcomeContent;
