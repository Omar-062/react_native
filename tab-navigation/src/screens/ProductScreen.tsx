import React from "react";
import { View, Text, Button } from "react-native";
import { Props } from "../types";

const ProductScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Product Screen</Text>
    </View>
  );
};

export default ProductScreen;
