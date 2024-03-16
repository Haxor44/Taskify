import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
    },
    footerText:{
        color:colors.black,
        fontSize:15,
        textAlign:"center",
        marginTop:12
    },
    footerLink:{
        color:colors.purple,
        fontWeight:"bold"
    }
})

export default styles;