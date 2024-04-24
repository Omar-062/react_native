import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";

const Layout = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Header text={title} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});

export default Layout;
