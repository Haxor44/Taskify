import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        width:60,
        height:60,
        backgroundColor:colors.blue,
        position:"absolute",
        bottom:24,
        right:24
    },
    plus:{
        fontSize:32,
        marginTop:-2,
        color:colors.white,
        fontWeight:"600"
    }
});

export default styles;