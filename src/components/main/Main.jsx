import React from "react";
import { View,  } from "react-native";
import RepositoryList from "../repositoryList/repositoryList";
import NavBar from "../UpBar/UpBar";
import s from './MainStyles'
import BottomBar from "../BottomBar/BottomBar";
import Gradient from "../Gradient/Gradient";
import { Routes, Route } from "react-router-native";
import r from '../../utils/routes'
import Explore from "../Explore/Explore.jsx";
import MusicLibrary from '../MusicLibrary/MusicLibrary'
import { useSelector } from "react-redux";
import CreateUser from "../CreateUser";

export const Main = () => {

  const user = useSelector(state => state.user)

  return (
    <Gradient>
      {!user ? <CreateUser/>:<View style={s.view}>
        <NavBar/>
        <Routes>
          <Route exact path={r.home} element={<RepositoryList/>}/>
          <Route exact path={r.explore} element={<Explore/>}/>
          <Route exact path={r.library} element={<MusicLibrary/>}/>
        </Routes>
          <BottomBar/>
      </View>
          }
    </Gradient>
  )
}
