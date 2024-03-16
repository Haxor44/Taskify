import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:24,
    },
    footerText:{
        color:colors.grey,
        fontSize:15,
        textAlign:"center",
        marginTop:12
    },
    footerLink:{
        color:colors.purple,
        fontWeight:"bold"
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:16
    },
    agreedText:{
        color:colors.grey,
        fontSize:12,
        marginLeft:8
    },
    link:{
        textDecorationLine:"underline"
    }
});
export default styles;