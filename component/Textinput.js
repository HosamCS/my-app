import React from 'react'
import {  StyleSheet,TextInput  } from 'react-native'

 

export const Mytxt=(props)=>{

  
    return(
        

        <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder ={props.placeholder} 
                  placeholderTextColor = "#bbbbbb"
                  autoCapitalize = "none"
                  secureTextEntry={props.secureTextEntry}
                  
        />

    )
    
}

const styles = StyleSheet.create({

    input: {
        width:'70%',
        margin: 5,
        height: 40,
        top:190,
        color:'black',
        backgroundColor:'white',
        borderColor: '#fff',
        borderRadius:15,
        borderWidth: 1,
     },
})