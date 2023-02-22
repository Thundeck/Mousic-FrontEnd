import React from 'react'
import { View,Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import s from './BottomBarStyles'
import { Link, useLocation } from 'react-router-native'
import r from '../../utils/routes'


const Links = ({to, children}) => {
  const loc = useLocation()
  return (
    <Link to={to}>
        {children}
    </Link>
   )
}

const BottomBar = () => {
  return (
    <View style={s.cont} >
      <Links to={r.home}>
        <View  style={s.contIcon}>
            <Entypo style={s.icon} name='home'/>
            <Text style={s.text} >Home</Text>
        </View>
      </Links>
      <Links to={r.explore}>
        <View  style={s.contIcon}>
            <Ionicons style={s.icon} name='compass-outline'/>
            <Text style={s.text} >Explore</Text>
        </View>
      </Links>
      <Links to={r.library}>
        <View  style={s.contIcon}>
            <MaterialCommunityIcons style={s.icon} name='music-box-multiple-outline'/>
            <Text style={s.text} >Library</Text>
        </View>
      </Links>
    </View>
  )
}

export default BottomBar