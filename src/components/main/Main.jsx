import React from "react";
import { Text, View,  } from "react-native";
import Constants from 'expo-constants'
import RepositoryList from "../repositoryList/repositoryList";
import NavBar from "../NavBar/NavBar";
import s from './MainStyles'

export const Main = () => {
  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
        <NavBar/>
      <View style={s.view}>
        <RepositoryList/>
      </View>
    </View>
  )
}
