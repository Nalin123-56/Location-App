import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native'
import  { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";
  import { FontAwesome5 } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PhoneInput from "react-native-phone-number-input";


const LoginPage = (p) => {
 
    const stack = p.navigation;
  return (
    <View style={styles.container}>
     <View style={styles.icon_container}>
     <Ionicons name="person-circle-sharp" style={styles.icon} />
     
        <TouchableOpacity  style={styles.edit_icon_container}>
        <FontAwesome name="edit" size={responsiveFontSize(2)} color="white" />
        </TouchableOpacity>
     
     
     </View>
     
     <LoginField stack={stack}/>
    </View>
  )
}

export default LoginPage


function LoginField(p) {
    const stack= p.stack;

    function gotoHome(){
        stack.navigate('emergency');
    }
   
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [PhoneNumber] = useState('');

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
    //   console.warn("A date has been picked: ", date);
      setSelectedDate(date);
      hideDatePicker();
    };

    return(
        <View style={styles.login_container} >
            <View style={styles.input_container}>
                <TextInput placeholder='Full Name' style={styles.input} />
            </View>

            <View style={styles.input_container}>
                <TextInput placeholder='Nick Name' style={styles.input} />

            </View>

    
     
            <View style={styles.date_container}>
                <TextInput placeholder='Date of Birth' style={styles.input} 
                value={selectedDate ? selectedDate.toDateString() : ''}/>
                <AntDesign name="calendar" size={24} color="black" onPress={showDatePicker} /> 
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

            <View style={styles.input_container}>
                <TextInput placeholder='Email' style={styles.input} />
            </View>

            <View style={styles.input_container}>
            <PhoneInput 
                defaultValue={PhoneNumber}
                defaultCode='IN' 
                style={{width:responsiveWidth(50)}}
                textContainerStyle={{ backgroundColor: '#D3D3D3' }}
                countryPickerButtonStyle={{ backgroundColor: '#D3D3D3' }}
                containerStyle={{width:responsiveWidth(70)}}

                // onChangeFormattedText={(text)=>{
                //     setPhoneNumber(text)
                // }}
                />
            </View>

            <View style={styles.address_container}>
                <TextInput placeholder='Address' style={styles.input} />
                <View style={styles.address_icon_container}>
                <FontAwesome5 name="location-arrow" size={responsiveFontSize(1.5)} color="white" />
                </View>
                
            </View>

            <TouchableOpacity onPress={gotoHome} style={styles.button} >
        <Text style={styles.button_text}>Continue</Text>
      </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({
    login_container:{
        flex:1,
        // backgroundColor:'red',
        alignItems: 'center',
        
    },
    container:{
        flex:1,
        // backgroundColor:'red',
        alignItems: 'center',
        
    },

    edit_icon_container:{
        backgroundColor:'#7c40ff',
        width:responsiveWidth(5.5),
        borderRadius:5,
        height:responsiveHeight(3),
        justifyContent:'center',
        alignItems: 'center', 
        position:'absolute',
        marginTop:responsiveHeight(13),
        marginLeft:responsiveWidth(26),
    },

    icon_container:{
        marginTop:responsiveHeight(10),
    },

    icon:{
        fontSize:responsiveFontSize(18),
        color:'#D3D3D3'
    },

    input_container:{
        width:responsiveWidth(80),
        backgroundColor:'#D3D3D3',
        height:responsiveHeight(6),
        justifyContent:'center',
        borderRadius:5,
        paddingLeft:responsiveWidth(2),
        marginTop:responsiveHeight(2),

    },

    input:{
        fontSize:responsiveFontSize(2),
    },

    date_container:{
        width:responsiveWidth(80),
        backgroundColor:'#D3D3D3',
        height:responsiveHeight(6),
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems: 'center',
        borderRadius:5,
        paddingLeft:responsiveWidth(2),
        marginTop:responsiveHeight(3),
        paddingRight:responsiveWidth(2),
    },


    button:{
        backgroundColor:'#7c40ff',
        alignItems:'center',
        justifyContent:'center',
        width:responsiveWidth(80),
        height:responsiveHeight(6),
        borderRadius:50,
        marginTop:responsiveHeight(5)
    
    },

    button_text:{
        color:'white',
        fontSize:responsiveFontSize(2.5),
        
    },
   address_container:{
    width:responsiveWidth(80),
    backgroundColor:'#D3D3D3',
    height:responsiveHeight(6),
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems: 'center',
    borderRadius:5,
    paddingLeft:responsiveWidth(2),
    marginTop:responsiveHeight(3),
    paddingRight:responsiveWidth(2),
   }, 


 address_icon_container:{
    width:responsiveWidth(6),
    height:responsiveHeight(3),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'#BEBEBE',
    
   },
 
   
})