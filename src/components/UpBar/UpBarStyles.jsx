import {StyleSheet} from "react-native";
import theme from "../../utils/theme";



const s = StyleSheet.create({
  view:{
    background:"none",
    padding:20,
    paddingBottom:5,
    paddingTop:5,
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"space-between",
    height: 70,
},
viewCont:{
  flexDirection:"row",
  justifyContent:"space-between",
  width:80,
},
text:{
    color:theme.colors.white,
    fontSize:20,
    fontWeight:"bold",
},
iconSearch:{
  fontSize:25, 
  color:theme.colors.white
},
iconUser:{
  fontSize:30,
  color:theme.colors.white,

}
},



)

export default s