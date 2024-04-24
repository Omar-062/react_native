import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import MarketContent from "../components/MarketContent";
import Navbar from "../components/Navbar";

const MarketPage = (text) => {
  return (
    <View style={styles.container}>
      <Header text="Market" />
      <Search />
      <MarketContent />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
});

export default MarketPage;
