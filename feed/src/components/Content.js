import React from 'react';
import { Image } from 'expo-image';
import { Text, View, StyleSheet } from 'react-native';
import Item from '../components/Item';

const Content = () => {
  return (
    <View style={styles.container}>
         <View style={styles.listContainer}>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
          </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../images/gato-image.jpg")}/>
        </View>        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,  
    gap: 32,  
  },
  listContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
  },
  headerText: {
    color: "#000",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
  },
  imageContainer: {
    height: 230,
    borderRadius: 8,
    backgroundColor: '#F0F0F0'
  },
  image: {
    flex: 1,
    width: '100%'
  },
});

export default Content;
