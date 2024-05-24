import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Width } from "../../assets/constants";
import { colors } from "../../config";
const winWidth = Dimensions.get('window').width;




const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#D3D3D3',
        justifyContent:'space-between',
        paddingHorizontal:winWidth*0.02,
        alignItems:'center',
        width  :winWidth*0.8,
        borderRadius:winWidth*0.03,
        height:winWidth*0.1,
        alignSelf:'center',
        marginVertical:Width*0.05
    },
    icon:{
        width:winWidth*0.05,
        height:winWidth*0.05,
        tintColor:colors.darkGray
    }
});


export default styles;