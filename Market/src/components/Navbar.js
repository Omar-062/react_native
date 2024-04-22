import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.container}>        
       <View style={[styles.circle, styles.green]}/>
       <View style={[styles.circle, styles.grey]}/>
       <View style={[styles.circle, styles.grey]}/>
       <View style={[styles.circle, styles.grey]}/>
       <View style={[styles.circle, styles.grey]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 62,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
    borderWidth: 0.5, 
    borderColor: '#BDC5CD',
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  green: {
    backgroundColor: '#5DB075',

  },
  grey: {
    backgroundColor: '#E8E8E8',

  },
});

export default Navbar;