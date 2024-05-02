import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import {useFonts}  from 'expo-font';
const Startpage = () => {


  const [Go,setGo]=useState(true);
  
  const navigation = useNavigation();

  useEffect (()=>{
    if(Go== true) {
      setTimeout(()=>{
        navigation.navigate('first');
        setGo(false);
      },5000);
    }
  });


  

  const [Loaded] = useFonts({
   
    LeckerliOne: require('../../assets/Fonts/LeckerliOne-Regular.ttf'),
    Tions: require('../../assets/Fonts/Tinos-Regular.ttf'),
    
 })
 if (!Loaded){
   return null;
 }


  return (
    <LinearGradient  colors={['green', 'lightgreen']}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }} style={styles.gradient}>
 
      <View style={styles.container}>
       <Text style={styles.do_text}>EMERGENCY</Text>
     </View>

     

     <View style={styles.middle}>
        <Text style={styles.middle_text}>AMBULANCE </Text>
     </View>

 
    </LinearGradient>
  )
}

export default Startpage

const styles = StyleSheet.create({
 


    gradient:{
        flex:1,
        width: responsiveWidth(100),
        height:responsiveHeight(100),
        alignItems:'center',
        justifyContent:'center',
    }, 

    container: {
        alignItems: 'center',
        justifyContent: 'center',  
         backgroundColor:'white',
         padding:responsiveHeight(2),
         borderRadius:responsiveHeight(2),
        
      },
  
      do_text: {
        fontSize: responsiveFontSize(6),
        color: 'green',  
      },

    
      middle_text:{
        fontSize:responsiveFontSize(6),
        fontWeight:'bold',
        color:'white',
        fontFamily:'Tions',
        
      },

    
      

})