import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
       <View style = {styles.backgroundStyle}> 
          <TextInput style = {styles.inputStyle}
          value = {term}
          onChangeText = {onTermChange} 
          placeholder = 'Search'
          autoCapitalize = "none"
          autoCorrect = {false}
          onEndEditing = {onTermSubmit}
          />
       </View>
    );
};

const styles = StyleSheet.create ({
  backgroundStyle : {
    backgroundColor: 'lightgray',
    height:50,
    borderRadius:5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  inputStyle : {
      marginLeft: 20,
      fontSize: 18,
      flex:1
  }

});

export default SearchBar;