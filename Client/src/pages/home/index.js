import React, {useEffect, useState} from "react"
import {View, Text, BackHandler, StatusBar, TouchableWithoutFeedback, ScrollView } from "react-native"
import { BarChart } from "react-native-gifted-charts"
import styles from "./style"

export default function Home({navigation, props}) {

    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])

    const n = 5
    const [data, setData] = useState([])

    return(
        <View>
            <StatusBar backgroundColor={"#6294ac"} barStyle={"light-content"}/>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Conta")}>
                <View style={styles.container}>
                    <Text style={styles.text}>Nome do comércio</Text>
                </View>
            </TouchableWithoutFeedback>

            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <View style={{padding: 15, gap: 10}}>
                    <Text style={{...styles.text, color: "#222"}}>Gráfico sobre receita</Text>
                    <BarChart
                        data={[
                            {value: 500, frontColor: 'blue'},
                            {value: 800, frontColor: 'green'},
                            {value: 300, frontColor: 'red'},
                            {value: 0, frontColor: 'purple'},
                        ]}
                        height={250}
                        width={320}
                        // grossura do gráfico
                        barWidth={40}
                        // minimo de altura quando for 0
                        minHeight={3}
                        barBorderRadius={3}
                        spacing={20}
                        // quantidade de números do lado
                        noOfSections={3}
                        // linha preta que fica no lado
                        yAxisThickness={0}
                        // linha preta que fica embaixo
                        xAxisThickness={0}
                        yAxisTextStyle={{color: "gray"}}
                        xAxisLabelTextStyle={{color: "gray"}}
                        isAnimated
                        dashGap={5}
                    />
                </View>

                <View>
                    <Text style={{...styles.text, color: "#222"}}>Produtos mais vendidos</Text>
                </View>
            </ScrollView>
        </View>
    )
}