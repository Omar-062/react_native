import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import FeedContent from "../components/FeedContent";
import Navbar from "../components/Navbar";

const FeedPage = (text) => {
  return (
    <ImageBackground style={styles.container}>
      <Header text="Feed"/>
      <Search/>
      <FeedContent/>
      <Navbar/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
});

export default FeedPage;
