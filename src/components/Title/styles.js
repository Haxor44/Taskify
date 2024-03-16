import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    title:{
        color:colors.black,
        fontSize:24,
        fontWeight:"bold",
        paddingVertical:24
    },
    thin:{
        fontWeight:"300",
        color:colors.purple,
        fontSize:24,
        paddingHorizontal:24
    }
})

export default styles;