import React from 'react'
import { SafeAreaView, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import theme from '../../../utils/theme'

const Gradient = ({children}) => {
  return (
    <LinearGradient
    colors={[theme.colors.darkViolet,theme.colors.dark]}
    >
        <SafeAreaView>
            {children}
        </SafeAreaView>
    </LinearGradient>
  )
}

export default Gradient