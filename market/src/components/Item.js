import React from 'react';
import { Image } from 'expo-image';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Item = () => {

  const handlePress = () => {
    Alert.alert('You clicked on the photo of the best duelist', 'El gato challenges you to a duel!', [
      
      {
        text: 'forgive me',
        onPress: () => 
        Alert.alert('El Gato:', 'Ok you are free!', [
          {text: 'Thank you!', onPress: () => console.log('OK Pressed')},
        ]),
      },

      {
        text: 'i am ready!', 
        onPress: () => Alert.alert('Wasted', 'You were beaten up!', [
          {text: 'Thank you!', onPress: () => console.log('OK Pressed')},
      ]),},
    ]);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.container}>        
       <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../images/gato-image.jpg")}/>
       </View>

       <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Item #1 Name Goes here</Text>
        <Text style={styles.priceText}>$19.99</Text>
       </View>
    </View>
    </TouchableOpacity>
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
  image: {
    flex: 1,
    width: '100%'
  },
});

export default Item;