import {StyleSheet} from "react-native";
import theme from "../../utils/theme";


const s = StyleSheet.create({
cont:{
    borderBottomWidth:1,
    borderBottomColor:theme.colors.veryLightViolet
    },
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

viewContSection:{
    alignItems:"center",
    flexDirection:"row",
},
h:{
    color:theme.colors.white,
    fontSize:25,
    fontWeight:"bold"
},
more:{
    color:theme.colors.veryLightViolet,
    fontSize:15,
    fontWeight:"bold"
},
})

export default s