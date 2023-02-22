import {StyleSheet} from "react-native";
import theme from "../../utils/theme";


const s = StyleSheet.create({
header:{
    color:theme.colors.white,
    fontSize:30,
    fontWeight:"700"
},
text:{
    color:theme.colors.white,
    marginLeft:10,
    fontSize:20

},
textp:{
    color:theme.colors.white,
    height:200,
},
icon:{
    color:theme.colors.white,
    fontSize:30
},
view:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    height:50
},
viewCont:{
    alignItems:"center",
    flexDirection:"row",
},
})

export default s