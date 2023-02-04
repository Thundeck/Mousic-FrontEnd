import {StyleSheet} from "react-native";



const s = StyleSheet.create({
  list:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap"
  },
  view:{
    width:190,
    padding:20,
    paddingBottom:5,
    paddingTop:5,
    flexDirection:"column",
    justifyContent:"center",
    backgroundColor: "red"
},
  img:{
    width:150,
    height:150,
    borderRadius:100
  },
  cont:{
    flexDirection:"column",
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center"
  }
})

export default s