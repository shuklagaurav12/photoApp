import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import SearchBar from '../Components/SearchBar';
//import ResultList from '../Components/ResultList';
import { ActionSheet } from 'react-native-cross-actionsheet';
import ResultDetail from '../Components/ResultDetail';

const ITEM_WIDTH = Dimensions.get('window').width


const HomeScreen = ({navigation}) => {
 
   // State Sets using hooks
   const [term, setTerm] = useState('nature');
   const [results, setResults] = useState([]);
   const [errorMessage, setErrorMessage] = useState('')
   const [gridValue, setGridValue] = useState(2)
   const [isLoading, setisLoading] = useState(false)
   const [pageCurrent, setpageCurrent] = useState(1)
   
 
// Api Call
   const searchApi = async(searchTearm) => {
      setResults([])
      try{
  let response =  await fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7fa594f7cd3c530d95a5ff5f6aa2c38e&per_page=10&format=json&nojsoncallback=1&tags='+searchTearm+'&page='+pageCurrent) 
   let jason = await response.json();
      setResults ([...jason.photos.photo]);
     // setResults ([...results,...jason.photos.photo]);
      setisLoading(false)
      } catch (error){
         console.error(error);
         setErrorMessage('Something went wrong');
         setisLoading(false)
      }
   };

  


   // Action Sheet Method
   function action ()
   {
      ActionSheet.options({
      options: [
        { text: 'Grid2', onPress: () =>  setGridValue(2)},
        { text: 'Grid3', onPress: () =>  setGridValue(3)},
        { text: 'Grid4', onPress: () =>  setGridValue(4)},
      ],
      cancel: { onPress: () => console.log('cancel') }
       }) 
   }


   // Hooks Method 
useEffect(() =>{
  searchApi('nature')
   setisLoading(true);
  
   navigation.setOptions({
      // in your app, extract the arrow function into a separate component
      // to avoid creating a new one every time
      headerRight: () => (
       <Button
       onPress = {() => action()}
       title = "Menu"
       color = "#fff"
       />    
      ),
    });
   }, []);


   // ActivityIndicator 
   renderFooter = () => {
      return(
        isLoading ?
         <View style = {styles.loader}> 
           <ActivityIndicator size = "large"/>
         </View> : null
      );
    };
  

   // Lode more functionality
    handleLoadMore = () => {
        setpageCurrent(pageCurrent+1);
        setisLoading(true);
    };


  


    // handling render and flatlist
    return (
       <View style = {{flex: 1}}> 
       <SearchBar term = {term} 
        onTermChange = {setTerm} 
        onTermSubmit = {() => searchApi(term)}
       />  
       {/* {errorMessage ? <Text>{errorMessage}</Text> : null}    */}
       <ScrollView>
       {/* <ResultList result = {results} column = {gridValue}  /> */}
       {gridValue == 2 ? 
         <FlatList 
          horizontal = {false}
          showsVerticalScrollIndicator = {false}
          data = {results}
          key={'_'}
          numColumns = {gridValue}
          
          keyExtractor = {(results) => results.id}
          renderItem = {({item}) => {
          return <ResultDetail  result = {item} 
          itemWidth = {(ITEM_WIDTH - (10 * gridValue))/gridValue}
          />
          }}
           ListFooterComponent = {this.renderFooter}
           onEndReached = {this.handleLoadMore}
           onEndReachedThreshold = {0.5}
         /> : gridValue == 3 ?
         <FlatList 
          horizontal = {false}
          showsVerticalScrollIndicator = {false}
          data = {results}
          key={'#'}
          numColumns = {gridValue}
          keyExtractor = {(results) => results.id}
          renderItem = {({item}) => {
          return <ResultDetail  result = {item} 
          itemWidth = {(ITEM_WIDTH - (10 * gridValue))/gridValue}
          />
          }}
           ListFooterComponent = {this.renderFooter}
           onEndReached = {this.handleLoadMore}
           onEndReachedThreshold = {0.5}
          /> : 
          <FlatList 
          horizontal = {false}
          showsVerticalScrollIndicator = {false}
          data = {results}
          key={'*'}
          numColumns = {gridValue}
          keyExtractor = {(results) => results.id}
          renderItem = {({item}) => {
          return <ResultDetail  result = {item} 
          itemWidth = {(ITEM_WIDTH - (10 * gridValue))/gridValue}
          />
          }}
           ListFooterComponent = {this.renderFooter}
           onEndReached = {this.handleLoadMore}
           onEndReachedThreshold = {0.5}
          />
        }
       </ScrollView>
       </View>
    );
};

const styles = StyleSheet.create ({
   loader:{
      marginTop : 10,
      alignItems: 'center'
    }
});


export default HomeScreen;


