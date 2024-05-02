import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";
  import { useFonts } from 'expo-font';
  
const FirstPage = (p) => {

  function GotoSecondPage() {
    p.navigation.navigate('registerAccount');
  }

  const [Loaded] = useFonts({
    Tions: require('../../assets/Fonts/Tinos-Regular.ttf'),
    
 })
 if (!Loaded){
   return null;
 }

  return (
    
    <View style={styles.container}>
      <View style={styles.image_container}>
      <Image source={require('../../assets/Images/ambulane.png')} style={styles.image} />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>{'Ambulance responders are on the way \n for emergency  situation'}</Text>
      </View>
      <TouchableOpacity  style={styles.button}onPress={GotoSecondPage}>
        <Text style={styles.button_text}>Register</Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({

    container: {
        flex: 1,
       alignItems: "center",
       justifyContent: "center",
    },

    image_container  : {
        width: responsiveWidth(80),
        justifyContent: "center",
    },

    image:{
        width:responsiveWidth(80),
        height:responsiveHeight(40),
        justifyContent: "center",
    },

    text_container:{
        alignItems: 'center',
        marginTop:responsiveHeight(3)
    },

    text:{
        fontSize:responsiveFontSize(3),
        fontFamily:'Tions',
        textAlign: 'center',
    },

    button:{
        backgroundColor:'rgba(20, 129, 95, 1)',
        alignItems:'center',
        justifyContent:'center',
        width:responsiveWidth(70),
        height:responsiveHeight(6),
        borderRadius:50,
        marginTop:responsiveHeight(7)
    },

    button_text:{
        color:'white',
        fontSize:responsiveFontSize(4),
        
    }
})