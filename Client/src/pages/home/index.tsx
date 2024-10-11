import React, {useEffect, useState} from "react"
import {View, Text, BackHandler, StatusBar, TouchableWithoutFeedback, ScrollView, StyleSheet } from "react-native"
import { BarChart } from "react-native-gifted-charts"
import styles from "./style"
import { useSharedValue, withTiming } from "react-native-reanimated";
import { generateRandomNumbers } from "../../components/randomGrafico/generateRandom";
import { TouchableOpacity } from "react-native-gesture-handler";
import { calculatePercent } from "../../components/randomGrafico/calculatePorcentage";
import RenderItem from "./renderItem";
import DonutChart from "../../components/randomGrafico/donutChart";

interface Data {
    value: number;
    percentage: number;
    color: string;
}

// Raio do gráfico
const RADIUS = 120
// Valor da espessura do gráfico
const STROKE_WIDTH = 30
// Valor da espessura do traço externo
const OUTER_STROKE_WIDTH = 35
// Distância entre os dados
const GAP = 0.04

export default function Home({navigation, props}) {
    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])

    const n = 5
    const [data, setData] = useState<Data[]>([])
    const totalValue = useSharedValue(0)
    const decimals = useSharedValue<number[]>([])
    const colors = ['blue', 'red', 'green', 'purple', 'orange']

    const generateData = () => {
        // gera os números
        const generateNumbers = generateRandomNumbers(n)
        // soma o total dos números gerados
        const total = generateNumbers.reduce(
            (acc, currentValue) => acc + currentValue
        )
        // calcula a porcentagem dos números
        const generatePercentes = calculatePercent(generateNumbers, total)
        // transforma porcentagem em número decimal
        const generateDecimals = generatePercentes.map(
            number => Number(number.toFixed(0)) / 100
        )

        // junta todos os dados para mostrar
        const arrayOfObjects = generateNumbers.map((value, index) =>({
           value,
           percentage: generatePercentes[index],
           color: colors[index] 
        }))

        //para fazer a animação do gráfico
        totalValue.value = withTiming(total, {duration: 1000})
        decimals.value = [...generateDecimals]
        setData(arrayOfObjects)

        console.log({
            data,
            generateNumbers, 
            total,
            generatePercentes, 
            generateDecimals
        })
    }

    return(
        <View>
            <StatusBar backgroundColor={"#6294ac"} barStyle={"light-content"}/>

            <TouchableWithoutFeedback onPress={() => navigation.navigate("Conta")}>
                <View style={styles.container}>
                    <Text style={styles.text}>Nome do comércio</Text>
                </View>
            </TouchableWithoutFeedback>

            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <View style={{padding: 15, gap: 10, alignItems: "center"}}>
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

                <View style={{ alignItems: "center"}}>
                    <Text style={{...styles.text, color: "#222"}}>Produtos mais vendidos</Text>
                    
                    <View style={styles2.containerChart}>
                        <DonutChart
                            radius={RADIUS}
                            strokeWidth={STROKE_WIDTH}
                            outerStrokeWidth={OUTER_STROKE_WIDTH}
                            totalValue={totalValue}
                            smallFont={smallFont}
                            font={font}
                            n={n}
                            gap={GAP}
                            decimals={decimals}
                            colors={colors}
                        />
                    </View>

                    <TouchableOpacity onPress={generateData}>
                        <Text>Gerar número</Text>
                    </TouchableOpacity>
                    {data.map((item, index) => {
                        return <RenderItem item={item} index={index} key={index} />
                    })}
                </View>
            </ScrollView>
        </View>
    )
}


const styles2 = StyleSheet.create({
    containerChart: {
        width: RADIUS * 2,
        height: RADIUS * 2,
        marginTop: 10
    }
})