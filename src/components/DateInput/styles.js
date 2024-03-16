import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    oultine:{
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.grey,
        borderRadius:10,
        marginHorizontal:24,
        flexDirection:"row",
        alignItems:"center"
    },
    icon:{
        width:24,
        height:24,
        marginRight:8
    },
    text:{
        color:colors.grey,
        fontSize:12
    }
});
export default styles;