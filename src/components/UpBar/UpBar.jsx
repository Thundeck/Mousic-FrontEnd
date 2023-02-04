import React from 'react'
import { View,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome' 
import s from './UpBarStyles'
import theme from '../../../utils/theme'

const NavBar = () => {
  return (
    <View style={s.view} >
        <Text style={s.text} >Music</Text>
        <Icon name='search' style={{fontSize:25, color:theme.colors.white}}/>
    </View>
  )
}

export default NavBar