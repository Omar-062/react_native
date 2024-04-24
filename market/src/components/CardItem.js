import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CardItem = () => {
  return (
    <View style={styles.container}>        
       <View style={styles.imageContainer}>

       </View>
       <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Item #1 Name Goes here</Text>
        <Text style={styles.priceText}>$19.99</Text>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "flex-start",
    gap: 8,
    width: 110,
    height: 177,
  },
  imageContainer: {
    width: 110,
    height: 110,
    borderRadius: 8,
    backgroundColor: '#F6F6F6'
  },
  contentText: {
    color: "#000",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  priceText: {
    color: "#000",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
  },
});

export default CardItem;