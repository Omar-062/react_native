import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import ContentList from "../components/ContentList";
import Navbar from "../components/Navbar";

const ContentPage = (text) => {
  return (
    <View style={styles.container}>
      <Header text="Content" />
      <Search />
      <ContentList />
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

export default ContentPage;
