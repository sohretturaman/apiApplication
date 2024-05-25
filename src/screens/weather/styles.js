import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../config";
import { Width } from "../../assets/constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: Width * 0.04,
        color: colors.darkGray,
        fontWeight: '500',
        margin: Width * 0.05,
        textAlign: 'center',
      },
      innerTitle:{
        fontSize: Width * 0.035,
      },
});

export default styles;