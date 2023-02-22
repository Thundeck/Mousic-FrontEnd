import React from 'react'
import { View,Text,Button, Image, Modal} from 'react-native'
import { Link } from 'react-router-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import s from './CountStyle'
import theme from '../../utils/theme'


const Count = ({modalVisible,setModalVisible}) => {

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    >

        
    <View style={s.cont}>
        <View style={s.contHead} >
            <Button
            onPress={() => setModalVisible(false)}
            color={theme.colors.dark}
            title='< back'
            />
            <Text style={s.textHead} >Count</Text>
        </View >
        <Link style={{borderBottomWidth:1 , borderBottomColor:theme.colors.veryLightViolet}}>
            <View style={s.contUser} >
                <View style={s.contUserInit} s>
                {false? < Image style={s.img} source={{uri:"https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png"}} />
                :<Feather style={s.iconUser} name='user' />}
                <Text style={s.text} >User name</Text>
                </View>
                <MaterialCommunityIcons  style={s.icon} name='chevron-right' />
            </View>
        </Link>
        <View >
        <Link>
          <View style={s.viewCont} >
            <View style={s.view} >
            <MaterialCommunityIcons style={s.icon} name='account-box-outline' />
            <Text style={s.text} >Your channel</Text>
            </View >
            <MaterialCommunityIcons style={s.icon} name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.viewCont} >
            <View style={s.view} >
            <MaterialCommunityIcons style={s.icon} name='history' />
            <Text style={s.text} >Historial</Text>
            </View >
            <MaterialCommunityIcons style={s.icon} name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.viewCont} >
            <View style={s.view} >
            <MaterialCommunityIcons style={s.icon} name='account-box-multiple-outline' />
            <Text style={s.text} >Accounts</Text>
            </View >
            <MaterialCommunityIcons style={s.icon} name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.viewCont} >
            <View style={s.view} >
            <MaterialCommunityIcons style={s.icon} name='cog-outline' />
            <Text style={s.text} >Configuration</Text>
            </View >
            <MaterialCommunityIcons style={s.icon} name='chevron-right' />
          </View>
        </Link>
        </View>
    </View>
    </Modal>
  )
}

export default Count