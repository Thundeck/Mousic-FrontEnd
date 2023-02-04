import {StyleSheet} from "react-native";
import theme from "../../../utils/theme";



const s = StyleSheet.create({
  cont:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:50,
    height:60,
    paddingTop:5
},
contIcon:{
    alignItems:"center",
    
},
text:{
    color: theme.colors.white,
    fontSize:11,
    fontWeight:"300"
},
icon:{
    color: theme.colors.white,
    fontSize:25,
},
})

export default s