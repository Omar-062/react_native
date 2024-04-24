import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Item from '../components/Item';

const Content = () => {

  return (
    <View style={styles.container}>
        <View style={styles.itemsContainer}>
            <Text style={styles.headerText}>Hot deals</Text>
            <View style={styles.carouselContainer}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </View>
        </View>

        <View style={styles.itemsContainer}>
            <Text style={styles.headerText}>Trending</Text>
            <View style={styles.carouselContainer}>
                <Item/>
                <Item/>
                <Item/> 
            </View>
        </View>        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 16,
    gap: 32,
  },
  itemsContainer: {
    flexDirection: 'column',
    width: '100%', 
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
  },
  carouselContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  headerText: {
    color: "#000",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
  },
  
});

export default Content;