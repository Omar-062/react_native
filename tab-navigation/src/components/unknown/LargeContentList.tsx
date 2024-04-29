import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { H3, Regular } from "../reusables/Typography";

interface Props {
  navigation?: any;
}

const LargeContentList = ({ navigation }: Props) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("ProductScreen")}
      style={styles.container}
    >
      <View style={styles.imageContainer} />

      <View style={styles.contentContainer}>
        <H3 children={"Header"} />
        <Regular
          children={
            "He'll want to use your yacht, and I don't want this thing smelling like fish."
          }
        />
        <Regular children={"8m ago"} color={Colors.grey} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //height: 350,
    marginBottom: 16,
    gap: 8,
  },
  imageContainer: {
    height: 240,
    backgroundColor: Colors.grey,
    borderRadius: 8,
  },
  contentContainer: {
    gap: 8,
  },
});

export default LargeContentList;
