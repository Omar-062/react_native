import React from "react";
import { StyleSheet, View } from "react-native";
import Ellipse1 from "../../icons/Ellipse1";
import Ellipse2 from "../../icons/Ellipse2";
import Ellipse3 from "../../icons/Ellipse3";

const Background = () => {
  return (
    <View style={styles.container}>
      <Ellipse3 style={styles.ellipse3} />
      <Ellipse2 style={styles.ellipse2} />
      <Ellipse1 style={styles.ellipse1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#A259FF",
  },
  ellipse3: {
    position: "absolute",
    width: 600,
    height: 700,
    left: -25,
    top: -200,
  },
  ellipse2: {
    position: "absolute",
    width: 550,
    height: 500,
    left: 200,
    top: -125,
  },
  ellipse1: {
    position: "absolute",
    width: 550,
    height: 450,
    left: 250,
    top: -150,
  },
});

export default Background;
