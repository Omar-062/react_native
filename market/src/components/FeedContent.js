import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import FeedItem from "./FeedItem";

const data = [1, 2, 3, 4, 5];

const FeedContent = () => {
  const renderItem = ({ item }) => <FeedItem />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.imageContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
    gap: 16,
  },
  listContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },
  headerText: {
    color: "#000",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
  },
  imageContainer: {
    height: 160,
    borderRadius: 8,
    backgroundColor: "#F0F0F0",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export default FeedContent;
