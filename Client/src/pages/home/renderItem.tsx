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
// É nesse arquivo que mostra a legenda do gráfico, os resultados
const RenderItem = ({item, index} : Props) => {

    const {width} = useWindowDimensions()
    
    return(
            <Animated.View style={[styles.container, {width: width * 0.9}]} 
                // fazendo a animação dos resultados
                entering={FadeInDown.delay(index * 200)}
                exiting={FadeOutDown}
            >
                <View style={styles.contentContainer}>
                    {/* Cor */}
                    <View style={[styles.color, {backgroundColor: item.color}]}/>

                    {/* Nome do produto */}
                    <Text style={{...styles.text, color: "#313131"}}>Nome do Produto</Text>
                        
                    <View style={{alignItems: "flex-end"}}>
                        {/* Valor de vendas */}
                        <Text style={styles.text}>Quant.
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black"}}> {item.value}</Text>
                        </Text>
                        {/* Porcentagem */}
                        <Text style={[styles.text, {color: item.color}]}>{item.percentage}%</Text>
                    </View>
                </View>
            </Animated.View>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    container: {
        width: "50%",
        backgroundColor: "white",
        paddingVertical: 5,
        marginBottom: 15,
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
        width: 25,
        height: 25,
        borderRadius: 5,
    }, 
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#545454"
    }
})