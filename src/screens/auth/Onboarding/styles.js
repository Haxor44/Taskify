import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

//const {height} = Dimensions.get()

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    image:{
        width:"100%",
        flex:1
    },
    content:{
        padding:46,
        paddingTop:0,
        backgroundColor:colors.white
    },
    title:{
        color:colors.black,
        textAlign:"center",
        fontWeight:"bold",
        fontSize:22
    },
    subtitle:{
        fontSize:15,
        color:colors.grey,
        textAlign:"center",
        marginVertical:16
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        width: '100%',
        backgroundColor: colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      },
})

export default styles;