import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.container}>        
        <Text style={styles.greenText}>Back</Text>
        <Text style={styles.headerText}>{text}</Text>
        <Text style={styles.greenText}>Filter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  headerText: {
    color: "#000000",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
  },
  greenText: {
    color: "#5DB075",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 30,
  },
  
});

export default Header;