import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.purple,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding:13,
        marginVertical:8
    },
    text:{
        color:colors.white,
        fontSize:16,
        fontWeight:"500"
    },
    blueBg:{
        backgroundColor:colors.blue,
    }
})

export default styles;