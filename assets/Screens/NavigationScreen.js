import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Startpage from './Startpage';
import FirstPage from './FirstPage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginAccount from './LoginAccount';
import RegisterAccount from './RegisterAccount';

import { Svg, Path ,G} from 'react-native-svg';
import Emergency from './Emergency';
import Location from './Location';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigationScreen = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{
      headerShown:false
     }} initialRouteName= "splash">


      <Stack.Screen name="splash" component={Startpage} />
      <Stack.Screen name="first" component={FirstPage} 
      options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}/>
     
      <Stack.Screen name="loginAccount" component={LoginAccount} 
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}/>
      <Stack.Screen name="registerAccount" component={RegisterAccount} 
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}/>
    
      <Stack.Screen name="emergency" component={Emergency} 
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}/>
     <Stack.Screen name="location" component={Location} 
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}/>
   
    </Stack.Navigator>
   </NavigationContainer>



  )
}


// function TabNavigationScreen(){

//   const screenOptions = {
//     tabBarShowLabel: true,
//     headerShown: false,
//     tabBarActiveTintColor: 'white',
//     tabBarInactiveTintColor: 'black',
      
    
//     tabBarStyle: {
      
//       paddingRight: responsiveWidth(2),
//       paddingLeft: responsiveWidth(2),
//       height:responsiveHeight(9),
//       // backgroundColor:"gray",
//       justifyContent:'center',
//       alignItems:'center',
//       // marginTop:responsiveHeight(4),
//     },
//     tabBarLabelStyle: {
//       fontSize: responsiveFontSize(2),
//       marginTop:responsiveHeight(-2),
//       marginBottom:responsiveHeight(1),
  
//     },
   
//   }
//   return(
    
//          <Tab.Navigator  screenOptions={screenOptions}>

//            <Tab.Screen
//             name="Home" 
//             component={Homepage} 

//              options={{   
//                 tabBarIcon: ({ focused }) => ( 
//                     <View backgroundColor={focused ? "#8D3DFF" : "white"} style={{alignItems:'center', paddingBottom:responsiveHeight(1), borderRadius:responsiveWidth(3), width:responsiveWidth(15), height:responsiveWidth(15), justifyContent:'center', justifyContent:'center', marginTop:responsiveHeight(1)}}>
//                        <Svg fill="none" height={responsiveHeight(8)} width={responsiveWidth(8)}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="m20.0402 6.82165-5.76-4.03c-1.57-1.1-3.98-1.04-5.48997.13l-5.01 3.91c-1 .78-1.79 2.38-1.79 3.63995v6.9c0 2.55 2.07 4.63 4.62 4.63h10.77997c2.55 0 4.62-2.07 4.62-4.62v-6.78c0-1.34995-.87-3.00995-1.97-3.77995zm-7.29 11.17995c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75z" strokeWidth="1.5" stroke={focused ? 'white' : 'black'} fill="none"/></Svg>
                      
//                     </View>
//                  ), 
//         }} />


//             <Tab.Screen
//             name="Inbox" 
//             component={InboxPage}

//              options={{   
//                 tabBarIcon: ({ focused }) => ( 
//                     <View backgroundColor={focused ? "#8D3DFF" : "white"} style={{alignItems:'center',paddingBottom:responsiveHeight(1), borderRadius:responsiveWidth(3), width:responsiveWidth(15), height:responsiveWidth(15), justifyContent:'center', justifyContent:'center', marginTop:responsiveHeight(1)}}>
//                       <Svg fill={focused ? 'white' : 'black'} height={responsiveHeight(8)} width={responsiveWidth(8)} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><G ><Path d="m17 21.25h-10c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h7c.41 0 .75.34.75.75s-.34.75-.75.75h-7c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 3.65-2.1 5.75-5.75 5.75z" fill={focused ? 'white' : 'black'}/><Path d="m11.9988 12.8698c-.84 0-1.69-.26-2.34-.79l-3.13-2.50002c-.32-.26-.37999-.73-.12-1.05.26001-.32.72999-.38 1.04999-.12l3.13001 2.50002c.76.61 2.05.61 2.81 0l1.18-.94002c.32-.26.8-.21001 1.05.12002.26.32.21.8-.12 1.05l-1.18.94c-.64.53-1.49.79-2.33.79z" fill={focused ? 'white' : 'black'}/><Path d="m19.5 8.75c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75z" fill={focused ? 'white' : 'black'}/></G></Svg>
//                     </View>
//                  ), 
//         }} />


// <Tab.Screen
//             name="My Jobs" 
//             component={MyJobs} 

//              options={{   
//                 tabBarIcon: ({ focused }) => ( 
//                     <View backgroundColor={focused ? "#8D3DFF" : "white"} style={{alignItems:'center', paddingBottom:responsiveHeight(1), borderRadius:responsiveWidth(3), width:responsiveWidth(15), height:responsiveWidth(15), justifyContent:'center', justifyContent:'center', marginTop:responsiveHeight(1)}}>
//                       <Svg fill="none" height={responsiveHeight(8)} width={responsiveWidth(8)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><G stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" ><Path d="m18.63 7.1499c.04.61-.01 1.3-.13 2.07l-.73 4.69c-.62 3.91-2.43 5.23-6.34 4.62l-4.69001-.74c-1.35-.21-2.39-.57-3.15-1.11-1.45-1.01-1.87-2.67-1.47-5.23l.74-4.69c.62-3.91 2.43-5.23 6.34-4.62l4.69001.74c3.14.49 4.61 1.77 4.74 4.27z" strokeWidth="1.5" stroke={focused ? 'white' : 'black'} fill="none" /><Path d="m20.5 13.4699-1.5 4.51c-1.25 3.76-3.25 4.76-7.01 3.51l-4.50997-1.5c-2.27-.75-3.53-1.79-3.89-3.31.76.54 1.8.9 3.15 1.11l4.68997.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69c.12-.77.17-1.46.13-2.07 2.39 1.27 2.91 3.19 1.87 6.32z" strokeWidth="1.5" stroke={focused ? 'white' : 'black'} fill="none" /><Path d="m8.24 8.98c.96098 0 1.74-.77902 1.74-1.74s-.77902-1.74-1.74-1.74-1.74.77902-1.74 1.74.77902 1.74 1.74 1.74z" strokeWidth="1.5" stroke={focused ? 'white' : 'black'} fill="none"/></G></Svg>
//                     </View>
//                  ), 
//         }} />


// <Tab.Screen
//             name="Saved" 
//             component={SavedPage} 

//              options={{   
//                 tabBarIcon: ({ focused }) => ( 
//                     <View backgroundColor={focused ? "#8D3DFF" : "white"} style={{alignItems:'center', paddingBottom:responsiveHeight(1), borderRadius:responsiveWidth(3), width:responsiveWidth(15), height:responsiveWidth(15), justifyContent:'center', justifyContent:'center', marginTop:responsiveHeight(1)}}>
//                      <Svg fill="none" height={responsiveHeight(8)} width={responsiveWidth(8)} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><Path d="m12.62 20.81c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12002 0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24 1.01-1.36 2.63-2.24 4.44-2.24 3.07 0 5.56 2.5 5.56 5.59 0 7.00002-6.48 11.13002-9.38 12.12002z"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke={focused ? 'white' : 'black'} strokeWidth="1.5" fill="none"/></Svg>
//                     </View>
//                  ), 
//         }} />


// <Tab.Screen
//             name="Account" 
//             component={LoginPage} 

//              options={{   
//                 tabBarIcon: ({ focused }) => ( 
//                     <View backgroundColor={focused ? "#8D3DFF" : "white"} style={{alignItems:'center', paddingBottom:responsiveHeight(1), borderRadius:responsiveWidth(3), width:responsiveWidth(15), height:responsiveWidth(15), justifyContent:'center', justifyContent:'center', marginTop:responsiveHeight(1)}}>
//                       <Svg height={responsiveHeight(8)} width={responsiveWidth(8)} viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><Path d="m16 8a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 8a3 3 0 1 1 3-3 3.0034 3.0034 0 0 1 -3 3z" stroke={focused ? 'white' : 'black'} fill={focused ? 'white' : 'black'} strokeWidth="0.1"/><Path d="m16 2a14 14 0 1 0 14 14 14.0158 14.0158 0 0 0 -14-14zm-6 24.3765v-1.3765a3.0033 3.0033 0 0 1 3-3h6a3.0033 3.0033 0 0 1 3 3v1.3765a11.8989 11.8989 0 0 1 -12 0zm13.9925-1.4507a5.0016 5.0016 0 0 0 -4.9925-4.9258h-6a5.0016 5.0016 0 0 0 -4.9925 4.9258 12 12 0 1 1 15.985 0z" stroke={focused ? 'white' : 'black'} fill={focused ? 'white' : 'black'} strokeWidth="0.1"/><Path d="m0 0h32v32h-32z" fill="none" /></Svg>
//                     </View>
//                  ), 
//         }} />

        



      


       
//     </Tab.Navigator>
    
//   )
// }

export default NavigationScreen

const styles = StyleSheet.create({
  icon_container:{
     backgroundColor:'#8D3DFF',
     width:responsiveWidth(15),
     height:responsiveWidth(15),
     borderRadius:responsiveWidth(2),
     alignItems:'center',
     marginTop:responsiveHeight(3),
  },
})