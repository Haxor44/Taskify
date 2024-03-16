import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    input:{
        backgroundColor:colors.lightGrey,
        paddingHorizontal:24,
        paddingVertical:13,
        borderRadius:10,
        color:colors.grey,
        marginVertical:12,
        fontSize:15
    },
    oultine:{
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.grey,
        marginHorizontal:24
    }
})

export default styles