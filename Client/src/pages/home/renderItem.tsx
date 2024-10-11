import { View, Text, useWindowDimensions, StyleSheet } from "react-native"
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import React from "react"

interface Data {
    value: number;
    percentage: number;
    color: string;
}

type Props = {
    item: Data;
    index: number;
}

const RenderItem = ({item, index} : Props) => {

    const {width} = useWindowDimensions()
    
    return(
        <Animated.View style={[styles.container, {width: width * 0.9}]} 
            // fazendo a animação dos resultados
            entering={FadeInDown.delay(index * 200)}
            exiting={FadeOutDown}
        >
            <View style={styles.contentContainer}>
                <View style={[styles.color, {backgroundColor: item.color}]}/>
                <Text style={styles.text}>{item.percentage}%</Text>
                <Text style={styles.text}>Quant.
                    <Text style={{color: "white"}}>_</Text>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: "black"}}>{item.value}</Text>
                </Text>
            </View>
        </Animated.View>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 20,
        elevation: 5
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    color: {
        width: 60,
        height: 60,
        borderRadius: 10
    }, 
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#545454"
    }
})