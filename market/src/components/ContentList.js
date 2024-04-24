import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const data = [1, 2, 3, 4, 5];

const ContentList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer} />
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Header</Text>
        <Text style={styles.contentText}>
          He'll want to use your yacht, and I don't want this thing smelling
          like fish.
        </Text>
        <Text style={styles.timeText}>8m ago</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  itemContainer: {
    height: 350,
    marginBottom: 16,
    gap: 8,
  },
  imageContainer: {
    height: 240,
    backgroundColor: "#F6F6F6",
  },
  contentContainer: {
    gap: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
  },
  contentText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17,
    marginBottom: 8,
  },
  timeText: {
    color: "#BDBDBD",
    fontWeight: "600",
    lineHeight: 17,
  },
});

export default ContentList;
