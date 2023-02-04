import React from 'react'
import { View,Text } from 'react-native'
import s from './NavBarStyles'

const NavBar = () => {
  return (
    <View style={s.view} >
        <Text style={s.text} >Mousic</Text>
        <Text style={s.text} >Inicio</Text>
        <Text style={s.text} >Explorar</Text>
        <Text style={s.text} >Biblioteca</Text>
    </View>
  )
}

export default NavBar