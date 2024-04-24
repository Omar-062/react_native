import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import Content from '../components/Content';
import Navbar from '../components/Navbar';

const image = {uri: 'https://cdn.oboi-katalog.ru/files/pics/product/brick-lane-427424-427424-439291.jpg'};

const FeedPage = (text) => {
  return (
    <ImageBackground style={styles.container} source={image}>        
        <Header text="Feed"/>
        <Search/>
        <Content/>
        <Navbar/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between'
  },
});

export default FeedPage;