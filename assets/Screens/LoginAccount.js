import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";
import { useState } from 'react';





const LoginAccount = (p) => {



  

  function gotoSignupPage() {
    p.navigation.navigate('registerAccount');
  }
  function gotoEmergency() {
    p.navigation.navigate('emergency');
  }

 

  return (

    
    <View style={styles.login_container}>
      <Text style={styles.login_topic}>Log In</Text>

      <View style={styles.body_container}>
        <Text style={styles.email_address}>Name</Text>
        <View style={styles.email_input}>
            <TextInput style={styles.email_type_section}
            placeholder='enter name'
            />
        </View>

        <Text style={styles.email_address}>Password</Text>
        <View style={styles.email_input}>
            <TextInput style={styles.email_type_section} 
            placeholder='enter Password'
            secureTextEntry={true}
            />
        </View>
        

        <TouchableOpacity style={styles.button_container} onPress={gotoEmergency}>
            <Text style={styles.log_in}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom_text}>
        <Text style={styles.dont_have}>Don't have account?</Text>
        <TouchableOpacity onPress={gotoSignupPage}>
        <Text style={styles.sign_up}>Sign Up</Text>
        </TouchableOpacity>
        
        

         {/* <Text>{JSON.stringify(userInfo, null,2)}</Text> 
        // <TouchableOpacity onPress={()=>AsyncStorage.removeItem("@user")}>
        // <Text>delete local veriable</Text>
        // </TouchableOpacity> */}

       </View>
    </View>

    
  )
}

export default LoginAccount

const styles = StyleSheet.create({

    login_container:{
        flex:1,
        alignItems:'center',

    },

    login_topic:{
        fontSize:responsiveFontSize(4),
        marginTop:responsiveHeight(10),
        fontWeight:'bold',
        marginBottom:responsiveHeight(2),
        color:'rgba(20, 129, 95, 1)',
    },

    body_container:{
        width:responsiveWidth(80),
        height:responsiveHeight(50),
        backgroundColor:'white',
        padding:responsiveHeight(2),
        borderRadius:15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    email_address:{
        fontSize:responsiveFontSize(2),
        width:responsiveWidth(70),
        marginTop:responsiveHeight(5),
    },

    email_input:{
        width:responsiveWidth(70),
        padding:responsiveWidth(2),
        borderColor:'rgba(20, 129, 95, 1)',
        borderWidth: 1,
        borderRadius:15,
    },

    button_container:{
        width:responsiveWidth(50),
        backgroundColor:'rgba(20, 129, 95, 1)',
        height:responsiveHeight(5),
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:responsiveHeight(5),
    },

    log_in:{
        fontSize:responsiveFontSize(3),
        color:'white',

    },

    bottom_text:{
        flexDirection: 'row',
        marginTop:responsiveHeight(1),

    },
    
    dont_have:{
        fontSize:responsiveFontSize(2),
        fontWeight:'bold',
    },

    sign_up:{
        fontSize:responsiveFontSize(2),
        fontWeight:'bold',
        color:'rgba(20, 129, 95, 1)',
    }
})