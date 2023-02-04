import React from "react";
import { View,  } from "react-native";
import Constants from 'expo-constants'
import RepositoryList from "../repositoryList/repositoryList";
import NavBar from "../UpBar/UpBar";
import s from './MainStyles'
import BottomBar from "../BottomBar/BottomBar";

export const Main = () => {
  return (
    <View style={{marginTop:Constants.statusBarHeight, backgroundColor:"#1b1b1b" ,flex:1}}>
        <NavBar/>
      <View style={s.view}>
        <RepositoryList/>
      </View>
        <BottomBar/>
    </View>
  )
}
