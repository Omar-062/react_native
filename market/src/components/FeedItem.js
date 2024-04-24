import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FeedItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}/>

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Header</Text>
          <Text style={styles.timeText}>8m ago</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.contentText}>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    paddingBottom: 8,
  },
  imageContainer: {
    width: 50,
    height: 50,

    borderRadius: 8,
    backgroundColor: "#F0F0F0",
  },
  contentContainer: {
    flex: 1,
    gap: 8,
    paddingBottom: 15.5,
    borderBottomWidth: 1,
    borderColor: "#BDC5CD",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 19,
  },
  contentText: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 17,
  },
  timeText: {
    color: "#BDBDBD",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 17,
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export default FeedItem;
