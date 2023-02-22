import React from 'react'
import { SafeAreaView, View } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../utils/theme'
import s from './GradientStyles'

const Gradient = ({children}) => {
  return (
    <LinearGradient
    colors={[theme.colors.violet,theme.colors.darkViolet,theme.colors.dark]}
    style={s.gradient}
    >
        <SafeAreaView style={s.cont} >
            {children}
        </SafeAreaView>
    </LinearGradient>
  )
}

export default Gradient