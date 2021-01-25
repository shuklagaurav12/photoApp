import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const ResultDetail = ({result, itemWidth}) => {
   
    return (
       <View style = {styles.container}> 
           <Image style = {{width: itemWidth, height: 200, borderRadius:4 }} source = {{ uri: 'https://farm'+result.farm+'.staticflickr.com/'+result.server+'/'+result.id+'_'+result.secret+'.jpg'}} />
       </View>
    );
};

const styles = StyleSheet.create ({
    container:{
     marginLeft: 15,
     marginRight: 15,
     flex: 1,
     alignItems: 'center',
     marginTop:10,
     justifyContent: 'space-evenly',
    },
    image : {
        width: 200,
        height : 200,
        borderRadius: 4,
    }
});

export default ResultDetail ;

