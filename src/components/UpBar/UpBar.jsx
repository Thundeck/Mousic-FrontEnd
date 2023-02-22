import React,{useState} from 'react'
import { View,Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import s from './UpBarStyles'
import Count from '../Count/Count'

const NavBar = () => {
  const [modalVisible,setModalVisible] = useState(false)
  return (
    <View style={s.view} >
        <Text style={s.text} >Music</Text>
        <View style={s.viewCont}>
        <Icon name='search' style={s.iconSearch}/>
        <Icon onPress={() => setModalVisible(true)} name='user' style={s.iconUser}/>
        </View>
        <Count modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

export default NavBar