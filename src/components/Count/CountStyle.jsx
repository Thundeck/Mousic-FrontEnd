import {StyleSheet} from "react-native";
import theme from "../../utils/theme";



const s = StyleSheet.create({
  cont:{
    backgroundColor:theme.colors.dark,
    padding:10,
    height:"100%"

},
contHead:{
    width:100,
    justifyContent:"flex-start",
    alignItems:"center",
},
contUser:{
    width:200,
    marginTop:10,
    marginBottom:30,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
},
contUserInit:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center"
},
text:{
    color: theme.colors.white,
    fontSize:20,
    fontWeight:"400",
    paddingLeft:10
},
textHead:{
    color: theme.colors.white,
    fontSize:25,
    fontWeight:"bold"
},
icon:{
    color: theme.colors.white,
    fontSize:25,
},
iconUser:{
    color: theme.colors.white,
    fontSize:48,
},
viewCont:{
flexDirection:"row",
justifyContent:"space-between",
alignItems: "center"
},
view:{
    marginTop:30,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems: "center"
    },
img:{
    width:50,
    height:50,
    borderRadius:100,
  },
})

export default s