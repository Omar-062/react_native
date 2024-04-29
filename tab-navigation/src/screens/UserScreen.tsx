import React from "react";
import { View, Text, Button } from "react-native";
import { Props } from "../types";

const UserScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to User Screen</Text>
    </View>
  );
};

export default UserScreen;
