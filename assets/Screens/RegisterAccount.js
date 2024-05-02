import { StyleSheet, Text, View ,TextInput, TouchableOpacity,} from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";

  import * as webBrowser from 'expo-web-browser';
  import * as Google from 'expo-auth-session/providers/google';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { Button } from 'react-native-web';
  import { useState } from 'react';
import LoginAccount from './LoginAccount';

  webBrowser.maybeCompleteAuthSession();

const RegisterAccount = (p) => {

     // const [userInfo,setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:"901809610533-sb9lkbncrc7alahq7kjt49l71lui3rjo.apps.googleusercontent.com",
    iosClientId:"901809610533-vb1svb1788uvr2csvstnk0hjbbaop4ra.apps.googleusercontent.com",
    androidClientId:"901809610533-hb6v1j11p119bcrog3s3evj7ij13q3g5.apps.googleusercontent.com",
    
  });

  React.useEffect(()=>{
    if (response?.type==='success'){
      console.log(authentication)
    }
  },[response]);

  // React.useEffect(()=>{
  //   handleSignInWithGoogle();
  // },[response]);

  // async function handleSignInWithGoogle(){
  //   const user = await AsyncStorage.getItem("@user");

  //   if(!user){
        
  //     if (response ?.type === "success"){
  //       await getUserInfo(response.authentication.accessToken);
  //     }
  //    await getUserInfo ();
  //   }else{
  //     setUserInfo(JSON.parse(user));
  //   }
  // }

  // const getUserInfo = async (token)=>{
  //   if(!token) return;
  //     try{
  //       const response = await fetch (
  //         "https://www.googleapis.com/userinfo/v2/me", 
  //         {
  //           headers: { Authorization :`Bearer ${token}` },
  //         }
  //       );

  //       const user = await response.json();
  //       await AsyncStorage.setItem ("@user", JSON. stringify(user));
  //       setUserInfo(user);
  //     } catch (error) {
  //       // add error
  //     }



    
  // }

  const[uEmail,setUEmail] = useState ('');
  const[uPassword,setUPassword] = useState ('');

  function gotoLoginPage() {
    p.navigation.navigate('loginAccount');
  }

  return (
    <View style={styles.login_container}>
      <Text style={styles.login_topic}>Register</Text>

      <View style={styles.body_container}>
        <Text style={styles.email_address}>Email Address</Text>
        <View style={styles.email_input}>
            <TextInput style={styles.email_type_section} 
            onChangeText={(value) => setUEmail(value)}
            placeholder='enter email address'
            />
        </View>

        <Text style={styles.email_address}>User Name</Text>
        <View style={styles.email_input}>
            <TextInput style={styles.email_type_section} 
            placeholder='enter user name'
            />
        </View>

        <Text style={styles.email_address}>Password</Text>
        <View style={styles.email_input}>
            <TextInput style={styles.email_type_section} 
            onChangeText={(value) => setUPassword(value)}
            placeholder='enter Password'
            secureTextEntry={true}
            />
        </View>

        <Text style={styles.email_address}>Conform Password</Text>
        <View style={styles.email_input}>
            <TextInput style={styles.email_type_section} 
            placeholder='enter Re-type Password'
            secureTextEntry={true}
            />
        </View>

        <View style={styles.bottom_accept_text}>
        <Text style={styles.i_accept}>I Accept the term and condition</Text>
      </View>

        <TouchableOpacity  style={styles.button_container} disabled={!request} onPress={()=>promptAsync()}>
            <Text style={styles.log_in} >Sign Up</Text>
        </TouchableOpacity>

        
      </View>

      <View style={styles.bottom_text}>
        <Text style={styles.dont_have}>Already have account?</Text>
        <Text style={styles.sign_up} onPress={gotoLoginPage}>Log In</Text>
      </View>
    </View>
  )
}

export default RegisterAccount

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
        height:responsiveHeight(65),
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
        marginTop:responsiveHeight(3),
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
    },

    bottom_accept_text:{
        width:responsiveWidth(70),
        alignItems:'center',
        marginTop:responsiveHeight(2),
    },

    i_accept:{
        fontSize:responsiveFontSize(2),
        fontWeight:'bold',
    },
    
})