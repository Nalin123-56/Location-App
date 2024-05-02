import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";


const Location = () => {
  return (
    <View style={styles.container}>
    <View style={styles.image_container}>
    <Image source={require('../../assets/Images/location.jpg')} style={styles.image} />
    </View>
    <View style={styles.text_container}>
    <Text style={styles.textLo}>Location</Text>
      <Text style={styles.text}>{'Main bus staiion, Anuradpura \n 8.324132640092946 \n 80.40450386904519'}</Text>
    </View>
    <TouchableOpacity  style={styles.button}>
      <Text style={styles.button_text}>SOS</Text>
    </TouchableOpacity>
   
  </View>
  )
}

export default Location

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
        borderRadius:responsiveFontSize(3),
    },

    text_container:{
        marginTop:responsiveHeight(3)
    },

    text:{
        fontSize:responsiveFontSize(3),
        fontFamily:'Tions',
        color:'rgba(20, 129, 95, 1)',
      
        
    },

    button:{
        backgroundColor:'rgba(165, 18, 18, 1)',
        alignItems:'center',
        justifyContent:'center',
        width:responsiveWidth(50),
        height:responsiveHeight(25),
        borderRadius:100,
        marginTop:responsiveHeight(5)
    },

    button_text:{
        color:'white',
        fontSize:responsiveFontSize(8),
        fontWeight:'bold'
        
    },
    
    textLo:{
        color:'rgba(20, 129, 95, 1)',
        fontSize:responsiveFontSize(5),
        fontWeight:'bold'
        
    },

})