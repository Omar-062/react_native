import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>        
        <View style={styles.innerContainer}>        
            <TextInput style={styles.inputText} placeholder="Search"/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 32,
    marginBottom: 16,
    marginHorizontal: 16,  
  },
  innerContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1, 
    borderColor: '#E8E8E8',
  },
  inputText: {
    flex: 1,
    color: "#BDBDBD",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
  },
  
});

export default Search;