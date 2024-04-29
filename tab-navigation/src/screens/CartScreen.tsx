import React from "react";
import { View, Text, Button } from "react-native";
import { Props } from "../types";

const CartScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Cart Screen</Text>
    </View>
  );
};

export default CartScreen;
