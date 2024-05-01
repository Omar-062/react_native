import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { H3, Regular } from "../reusables/StyledTypography";
import { Colors } from "./Colors";
import { Props } from "../../types";


const SmallContentList = ({ navigation }: Props) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("CategoryScreen")}
      style={styles.container}
    >
      <View style={styles.imageContainer} />

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <H3 children={"Header"} />
          <Regular children={"8m ago"} color={Colors.grey} />
        </View>

        <View>
          <Regular
            children={
              "He'll want to use your yacht, and I don't want this thing smelling like fish."
            }
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    paddingBottom: 8,
  },
  imageContainer: {
    width: 50,
    height: 50,

    borderRadius: 8,
    backgroundColor: Colors.grey,
  },
  contentContainer: {
    flex: 1,
    gap: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#BDC5CD",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SmallContentList;
