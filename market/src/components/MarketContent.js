import React from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import CardItem from "./CardItem";

const data = [
  { id: 1, header: "Hot deals" },
  { id: 2, header: "Trending" },
  { id: 3, header: "Hot deals" },
  { id: 4, header: "Trending" },
];
const MarketContent = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemsContainer}>
      <Text style={styles.headerText}>{item.header}</Text>
      <FlatList
        horizontal
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <CardItem />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.itemsContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 32,
  },
  itemsContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },
  carouselContainer: {
    flexDirection: "row",
    gap: 16,
  },
  headerText: {
    color: "#000",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
  },
});

export default MarketContent;
