import React from "react";
import { StyleSheet, View } from "react-native";
import {
  SearchInput,
  PrimaryInput,
} from "../../src/components/reusables/StyledInput";

import {
  H1,
  H2,
  H3,
  Regular,
  ButtonText,
} from "../../src/components/reusables/StyledTypography";

import { PrimaryButton } from "../components/reusables/StyledButton";

import { Colors } from "../components/unknown/Colors";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <H1 children={"Welcome to Cart Screen"} textAlign={"left"} />
      <H2 children={"Welcome to Cart Screen"} />
      <H3 children={"Welcome to Cart Screen"} />
      <Regular children={"Welcome to Cart Screen"} />
      <Regular children={"Welcome to Cart Screen"} color={Colors.green} />

      <SearchInput />
      <PrimaryInput placeholder={"Input"} />

      <PrimaryButton>
        <ButtonText children={"BATON"} />
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",

    gap: 20,
  },
});

export default CartScreen;
