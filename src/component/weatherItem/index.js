import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const WeatherItem = (props) => {
    const {data} = props
  return (
    <View style={styles.container}>
       <View>
        <Image  source={{uri:data.icon}} style={styles.icon}/>
       </View>
       <View style={styles.innerContainer}>
         <Text style={styles.innerTitle}>{data.day} </Text>
         <Text style={styles.title}>{data.description} </Text>
       
         <Text style={styles.innerTitle}><Text style={styles.innerTitle}>{data.degree} C </Text> /  Gece: {data.night}</Text>
         <View style={styles.bottomWrapper}>
            <Text style={styles.min}>max: {data.max}</Text>
            <Text style={styles.min}>min: {data.min}</Text>
         </View>
       </View>
    </View>
  );
};
export default WeatherItem;
