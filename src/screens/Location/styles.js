import { StyleSheet, Text, View } from "react-native";
import { Height, Width } from "../../assets/constants";


const styles = StyleSheet.create({
    text:{
        fontSize:Width*0.05,
        fontWeight:'bold',
        alignSelf:'center',
        marginVertical:Width*0.05,
        textAlign:  'center'
    },
    container:{
        justifyContent:'center',
        height:Height
    },
    title:{
        fontSize:Width*0.04,
        fontWeight:'bold',
        alignSelf:'center',
        marginVertical:Width*0.05
    }
});

export default styles;