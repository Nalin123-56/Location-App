import { StyleSheet, Text, View , TouchableOpacity  } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";

const Emergency = (p) => { 

    function gotoLocation() {
        p.navigation.navigate('location');
      }
  return (
    <View style={styles.container}> 
  <View style={styles.container2} >
  <Text style={styles.Place}>Place select the</Text>
      <Text style={styles.emer}>Emergency</Text>
      <TouchableOpacity  style={styles.button} onPress={gotoLocation}>
        <Text style={styles.button_text}>An accident</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button} onPress={gotoLocation}>
        <Text style={styles.button_text}>Chest pain</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button} onPress={gotoLocation}>
        <Text style={styles.button_text}>Breath lessness</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button} onPress={gotoLocation}>
        <Text style={styles.button_text}>Other</Text>
      </TouchableOpacity>
  </View>
    </View>
  )
}

export default Emergency

const styles = StyleSheet.create({

    Place:{
        fontSize:responsiveFontSize(3),
        fontWeight:'bold',
        color:'black',
        fontFamily:'Tions',
        
    },
    emer:{
        fontSize:responsiveFontSize(5),
        fontWeight:'bold',
        color:'black',
        fontFamily:'Tions',
        
    },
    container:{
        flex:1,
        alignItems:'center',

    },
    container2:{
        borderWidth: 2, 
        borderColor: 'gray', 
        borderRadius: 10, 
        padding: 10,
       
        paddingBottom:responsiveHeight(10),
        marginTop:responsiveHeight(10),
    

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