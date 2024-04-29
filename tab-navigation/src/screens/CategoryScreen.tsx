import React from "react";
import { View, Text, Button } from "react-native";
import { Props } from "../types";

const CategoryScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Category Screen</Text>
    </View>
  );
};

export default CategoryScreen;
