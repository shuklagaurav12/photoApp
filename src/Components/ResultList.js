import React, {useState} from 'react';
import {Dimensions, View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import ResultDetail from '../Components/ResultDetail';
import Home from '../Screens/Home';

const ITEM_WIDTH = Dimensions.get('window').width

const ResultList = ({result, column}) => {
  
const [isLoading, setisLoading] = useState(false) 
const [pageCurrent, setpageCurrent] = useState(1)

  renderFooter = () => {
    return(
      isLoading ?
       <View style = {styles.loader}> 
         <ActivityIndicator size = "large"/>
       </View> : null
    );
  };

  handleLoadMore = () => {
      setpageCurrent(pageCurrent+1)
      setisLoading(true);
     <Home pageCount = {pageCurrent} />    

  };

   
   return (
     <View> 
       {column == 2 ? 
         <FlatList 
          horizontal = {false}
          showsVerticalScrollIndicator = {false}
          data = {result}
          pagingEnabled={true}
          key={'_'}
          numColumns = {column}
          keyExtractor = {(result) => result.id}
          renderItem = {({item}) => {
          return <ResultDetail  result = {item} 
          itemWidth = {(ITEM_WIDTH - (10 * column))/column}
          />
          }}
          ListFooterComponent = {this.renderFooter}
          onEndReached = {this.handleLoadMore}
          onEndReachedThreshold = {0}
         /> : column == 3 ?
         <FlatList 
          horizontal = {false}
          showsVerticalScrollIndicator = {false}
          data = {result}
          pagingEnabled={true}
          key={'#'}
          numColumns = {column}
          keyExtractor = {(result) => result.id}
          renderItem = {({item}) => {
          return <ResultDetail  result = {item} 
          itemWidth = {(ITEM_WIDTH - (10 * column))/column}
          />
          }}
          ListFooterComponent = {this.renderFooter}
          onEndReached = {this.handleLoadMore}
          onEndReachedThreshold = {0}
          /> : 
          <FlatList 
          horizontal = {false}
          showsVerticalScrollIndicator = {false}
          data = {result}
          pagingEnabled={true}
          key={'*'}
          numColumns = {column}
          keyExtractor = {(result) => result.id}
          renderItem = {({item}) => {
          return <ResultDetail  result = {item} 
          itemWidth = {(ITEM_WIDTH - (10 * column))/column}
          />
          }}
          ListFooterComponent = {this.renderFooter}
          onEndReached = {this.handleLoadMore}
          onEndReachedThreshold = {0}
          />
        }
     </View>
   );
}

const styles = StyleSheet.create ({
   loader:{
     marginTop : 10,
     alignItems: 'center'
   }
});

export default ResultList ;

