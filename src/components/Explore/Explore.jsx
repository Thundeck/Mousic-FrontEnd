import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import s from './Styles'


const Explore = () => {
  return (
    <View style={{flex:1}}>
      <View style={s.cont}>
       <Link>
          <View style={s.view} >
            <View style={s.viewCont}>
            <MaterialIcons style={s.icon}  name='new-releases' />
            <Text style={s.text} >New launches</Text>
            </View>
            <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.view} >
            <View style={s.viewCont}>
            <MaterialCommunityIcons style={s.icon}  name='trending-up' />
            <Text style={s.text} >Rankings</Text>
            </View>
            <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.view} >
            <View style={s.viewCont}>
            <MaterialIcons style={s.icon} name='emoji-emotions' />
            <Text style={s.text} >Moments and genres</Text>
            </View>
            <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
          </View>
        </Link>
      </View>

      <View style={s.viewContSection} >

        <View style={{flex:1}}>
          <Text style={s.h} >
            New albums and singles
          </Text>
        </View>

        <Link>
          <Text style={s.more} >
            MORE
          </Text>
        </Link>

      </View>

      <View style={s.viewContSection} >
      <View style={{flex:1}} >
          <Text style={s.h} >
          Moments and genres
          </Text>
        </View>
        <Link>
          <Text style={s.more} >
            MORE
          </Text>
        </Link>
      </View>

      <View style={s.viewContSection} >
      <View style={{flex:1}} >
          <Text style={s.h} >
          Trends
          </Text>
        </View>
        <Link>
          <Text style={s.more} >
            MORE
          </Text>
        </Link>
      </View>
    </View>
  )
}

export default Explore