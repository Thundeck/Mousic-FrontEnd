import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import s from './MusicLibraryStyles'

const MusicLibrary = () => {
  return (
    <View style={{flex:1}}>
      <View style={s.view} >
        <Text style={s.header} >
        Recent Activity
        </Text>
        <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
      </View>
        <View>
          <Text style={s.textp}>
            Big Music Card
          </Text>
        </View>

        <Link>
          <View style={s.view} >
            <View style={s.viewCont}>
            <MaterialCommunityIcons style={s.icon}  name='playlist-play' />
            <Text style={s.text} >Playlists</Text>
            </View>
            <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.view} >
            <View style={s.viewCont}>
            <MaterialCommunityIcons style={s.icon}  name='album' />
            <Text style={s.text} >Albums</Text>
            </View>
            <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.view} >
            <View style={s.viewCont}>
            <Ionicons style={s.icon} name='musical-note-outline' />
            <Text style={s.text} >Songs</Text>
            </View>
            <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.view} >
            <View style={s.viewCont}>
            <MaterialCommunityIcons style={s.icon}  name='account-music-outline' />
            <Text style={s.text} >Artists</Text>
            </View>
            <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
          </View>
        </Link>

        <Link>
          <View style={s.view} >
            <View style={s.viewCont}>
            <MaterialCommunityIcons style={s.icon}  name='youtube-subscription' />
            <Text style={s.text} >Subscriptions</Text>
            </View>
            <MaterialCommunityIcons style={s.icon}  name='chevron-right' />
          </View>
        </Link>
    </View>
  )
}

export default MusicLibrary