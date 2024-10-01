import React, {useEffect} from "react"
import {View, Text, BackHandler} from "react-native"
import { BarChart, PieChart } from "react-native-gifted-charts"
import styles from "./style"

export default function Home({navigation}) {

    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])

    return(
        <View >
            <View style={styles.container}>
                <Text style={styles.text}>Tela inicial</Text>
            </View>

            <View style={{padding: 15}}>
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
        </View>
    )
}