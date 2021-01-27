import React from 'react'
import {  StyleSheet,Image ,ImageBackground } from 'react-native' 

export const Logo=()=>{
    return(
        <Image 
            source={require('../pic/logo.png')}
            style={{width:140,height:120,top:180}}>
       </Image>
    )
}

export const Backgroundimg=()=>{
    return(
        <ImageBackground
           source= { require('../pic/spencer-davis.jpg')}
          style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image:{
      flex:1,
      justifyContent:'center',
      resizeMode:'center',
    },
})
