import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const Footer=()=>{
    return(
        <View style={Styles.main}>
      <Image style={Styles.png} source={require('../components/images/heart.png')}/>
      <Image style={Styles.png} source={require('../components/images/speech-bubble.png')}/>
      <Image style={Styles.png} source={{uri:'https://www.kindpng.com/picc/m/141-1412822_instagram-share-icon-png-png-download-transparent-png.png'}}/>
      <Image style={Styles.gng} source={require('../components/images/small-bookmark.png')}/>  
   
    </View>
    );
};

const Styles=StyleSheet.create({
    gng:{
        width:30,height:30,marginTop:5,marginLeft:250,
    },
    main:{
        flexDirection:'row',
      },
        png:{
          width:30,height:30,marginTop:5,marginHorizontal:4,
        },
});
export default Footer;