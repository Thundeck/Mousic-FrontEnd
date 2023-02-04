import React from "react";
import { Text,FlatList, View, Image } from "react-native";
import data from '../data/repository.js'
import s from './repositoryListStyles.jsx'

const RepositoryList = () => {
  return (
    <FlatList
    data={data}
    renderItem={({item : e}) =>(        
        <View key={e.id} style={s.view}>
        <Image style={s.img} source={{uri:e.img}}/>
        <View style={s.cont} >
          <Text style={s.text} >{e.first_name}</Text>
          <Text style={s.text} >{e.subs} Subs</Text>
        </View>
    </View>)}
    />
  )
}

export default RepositoryList
