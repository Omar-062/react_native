import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import Content from '../components/Content';
import Navbar from '../components/Navbar';

const MarketPage = (text) => {
  return (
    <View style={styles.container}>        
        <Header text="Market"/>
        <Search/>
        <Content/>
        <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between'
  },
});

export default MarketPage;