import React from "react";
import { StyleSheet, View } from "react-native";
import { Props } from "../types";
import ListSection from "../components/sections/ListSection";
import LargeContentList from "../components/unknown/LargeContentList";
import SmallContentList from "../components/unknown/SmallContentList";

const HomeScreen = ({ navigation }: Props) => {

  return (
    <View style={styles.container}>
      <ListSection content={SmallContentList} navigation={navigation} />

      <ListSection content={LargeContentList} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
  },
});
export default HomeScreen;
