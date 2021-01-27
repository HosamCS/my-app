import React from 'react';
import { StyleSheet, View , ImageBackground, Text, Image,TextInput,TouchableOpacity,} from 'react-native';
import Login from './screen/Login'
import Signup from './screen/Signup'
import {NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

let user = null

export default class App extends React.Component {
   
  render(){

    return(
    <NavigationContainer>
     { user !== null ? <Authorized /> : <Unuthorized /> }
    </NavigationContainer>
    )

  }
} 


const Unuthorized = ()=>(
  <Stack.Navigator>
  <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
  <Stack.Screen name="Signup" options={{headerShown:false}} component={Signup} />      
 </Stack.Navigator>
)

const Authorized = ()=>(
  <Stack.Navigator>
    <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />    
 </Stack.Navigator>
)


const Home = ()=>{
  return(
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   <Text>Welcome {user.username}</Text>
  </View>)
}