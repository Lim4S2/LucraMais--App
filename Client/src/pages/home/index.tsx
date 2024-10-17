import React, {useEffect, useState} from "react"
import {View, Text, BackHandler, StatusBar, TouchableWithoutFeedback, ScrollView, StyleSheet, Touchable } from "react-native"
import { BarChart } from "react-native-gifted-charts"
import styles from "./style"
import { useSharedValue, withTiming } from "react-native-reanimated";
import { generateRandomNumbers } from "../../components/randomGrafico/generateRandom";
import { TouchableOpacity } from "react-native-gesture-handler";
import { calculatePercent } from "../../components/randomGrafico/calculatePorcentage";
import RenderItem from "./renderItem";
import DonutChart from "../../components/randomGrafico/donutChart";
import { useFont } from "@shopify/react-native-skia";
import PieChart from "react-native-pie-chart"

interface Data {
    value: number;
    percentage: number;
    color: string;
}

// Raio do gráfico
const RADIUS = 125
// Valor da espessura do gráfico
const STROKE_WIDTH = 30
// Valor da espessura do traço externo
const OUTER_STROKE_WIDTH = 35
// Distância entre os dados
const GAP = 0.048

export default function Home({navigation, props}) {
    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])
    
    const [selectButton,  setSelectButton] = useState(4)


    // PARÂMETROS PARA FAZER O GRÁFICO DE DUNET
    // n significa a quantidade de dados = 5
    const n = 5
    // onde vai pegar os valores
    const [data, setData] = useState<Data[]>([])
    // valor total dos dados gerados
    const totalValue = useSharedValue(0)
    // valor em decimal para fazer a porcentagem
    const decimals = useSharedValue<number[]>([])
    // as cores para cada dado, se tiver mais dados, tem que ter mais cores
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

    // fonte usada no projeto
    const font = useFont(require("../../../assets/fonts/NotoSansJP-Bold.ttf"), 60)
    const smallFont = useFont(require("../../../assets/fonts/NotoSansJP-Light.ttf"), 17)

    if (!font || !smallFont) {
        return <View/>
    }

    // PARÂMETROS PARA FAZER O GRÁFICO DE PIE
    const widthAndHeight = 160
    // quantidade
    const series = [123, 321, 789]
    const sliceColor = ["blue", "red", "green"]
    // dados do gráfico
    const pagamento = [
        {
            id: 1, 
            name: "Cartão", 
            color: "blue" 
        },
        {
            id: 2,
            name: "PIX",
            color: "red"
        },
        {
            id: 3,
            name: "Dinheiro",
            color: "green"
        }
    ]
    
    const barData = [
        {value: 600, frontColor: 'blue', spacing: 2, label: "Jan", labelWidth: 40 },
        {value: 300, frontColor: 'blue' },

        {value: 800, frontColor: 'green', label: "Fev", spacing: 2, labelWidth: 40 },
        {value: 400, frontColor: 'green' },

        {value: 300, frontColor: 'red', label: "Mar", spacing: 2, labelWidth: 40},
        {value: 150, frontColor: 'red'},

        {value: 100, frontColor: 'purple', label: "Abr", spacing: 2, labelWidth: 40},
        {value: 50, frontColor: 'purple'},

        {value: 1000, frontColor: 'orange', label: "Mai", spacing: 2, labelWidth: 40},
        {value: 500, frontColor: 'orange'},

        {value: 950, frontColor: 'black', label: "Jun", spacing: 2, labelWidth: 40},
        {value: 475, frontColor: 'black'},

        {value: 175, frontColor: 'yellow', label: "Jul", spacing: 2, labelWidth:  40},
        {value: 87, frontColor: 'yellow'},
        
        {value: 640, frontColor: 'brown', label: "Ago" , spacing: 2, labelWidth: 40},
        {value: 230, frontColor: 'brown'},

        {value: 230, frontColor: 'pink', label: "Set",  spacing: 2, labelWidth: 40 },
        {value: 115, frontColor: 'pink'},

        {value: 480, frontColor: 'gray', label: "Out",  spacing: 2, labelWidth: 40 },
        {value: 240, frontColor: 'gray'},
        
        {value: 480, frontColor: '', label: "Nov",  spacing: 2, labelWidth: 40 },
        {value: 240, frontColor: 'gray'},
        
        {value: 480, frontColor: 'gray', label: "Dez",  spacing: 2, labelWidth: 40 },
        {value: 240, frontColor: 'gray'},
        
    ]
    
    const receita = [
        {value: 600, label: "Jan" },
        {value: 800, label: "Fev" },
        {value: 300, label: "Mar"},
        {value: 100, label: "Abr"},
        {value: 1000, label: "Mai"},
        {value: 950, label: "Jun"},
        {value: 175, label: "Jul"},       
        {value: 640, label: "Ago" },
        {value: 230, label: "Set" },
        {value: 480, label: "Out" },
        {value: 1200, label: "Nov" },
        {value: 800, label: "Dez" },
    ]

    const despesa = [
        {value: 100,label: 'Jan' },
        {value: 123,label: 'Fev' },
        {value: 456,label: 'Mar'},
        {value: 789,label: 'Abr'},
        {value: 987,label: 'Mai'},
        {value: 654,label: 'Jun'},
        {value: 87,label: 'Jul'},
        {value: 258,label: 'Ago'},
        {value: 741,label: 'Set'},
        {value: 963,label: 'Out'},
        {value: 159,label: 'Nov'},
        {value: 951,label: 'Dez'},
    ]

    const lucro = [
        {value: 300,label: 'Jan' },
        {value: 400,label: 'Fev' },
        {value: 150,label: 'Mar'},
        {value: 50,label: 'Abr'},
        {value: 500,label: 'Mai'},
        {value: 475,label: 'Jun'},
        {value: 87,label: 'Jul'},
        {value: 230,label: 'Ago'},
        {value: 115,label: 'Set'},
        {value: 240,label: 'Out'},
        {value: 600,label: 'Nov'},
        {value: 400,label: 'Dez'},
    ]

    return(
        <View style={{backgroundColor: "white"}}>
            <StatusBar backgroundColor={"#6294ac"} barStyle={"light-content"}/>

            <TouchableWithoutFeedback onPress={() => navigation.navigate("Despesas")}>
                <View style={styles.container}>
                    <Text style={styles.text}>Nome do comércio</Text>
                </View>
            </TouchableWithoutFeedback>

            <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 175 }}
                showsVerticalScrollIndicator={false}>
                <View style={styles.barChart}>
                    <View style={styles.containerReceita}>
                        <View style={{ width: '100%'}}>
                            {selectButton === 1 ? 
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                                    <Text style={{...styles.text, color: "#545454", fontSize: 18}}>Desempenho anual</Text>
                                    <Text style={{...styles.text, color: "#3884db", fontSize: 18}}>Receita</Text>
                                </View>
                            
                                <BarChart
                                    data={receita}
                                    height={150}
                                    width={350}
                                    frontColor={"#3884db"}
                                    // grossura do gráfico
                                    barWidth={14}
                                    // minimo de altura quando for 0
                                    minHeight={3}
                                    barBorderRadius={3}
                                    spacing={14}
                                    // espaçamento inicial
                                    initialSpacing={6}
                                    //disableScroll={true}
                                    // quantidade de números do lado
                                    noOfSections={3}
                                    // linha preta que fica no lado
                                    yAxisThickness={0}
                                    // linha preta que fica embaixo
                                    xAxisThickness={0}
                                    yAxisTextStyle={{color: "gray",  fontSize: 11}}
                                    xAxisLabelTextStyle={{color: "gray"}}
                                    isAnimated
                                    dashGap={10}
                                    focusBarOnPress={true}
                                    focusedBarConfig={{
                                        color: "#3884db",
                                        width: 35
                                    }}
                                    renderTooltip={(item, index) => {
                                        return(
                                            <View style={{
                                                backgroundColor: "#d8d8d89d",
                                                bottom: -79,
                                                //marginLeft: -6,
                                                paddingHorizontal: 6,
                                                paddingVertical: 4,
                                                borderRadius: 6
                                            }}>
                                                <Text style={{fontWeight: 'bold', color: "#303030"}}>{item.value}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            
                            :   selectButton === 2 ? 
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                                    <Text style={{...styles.text, color: "#545454", fontSize: 18}}>Desempenho anual</Text>
                                    <Text style={{...styles.text, color: "#2b972b", fontSize: 18}}>Lucro</Text>
                                </View>
                            
                                <BarChart
                                    data={lucro}
                                    height={150}
                                    width={350}
                                    frontColor={"#2b972b"}
                                    // grossura do gráfico
                                    barWidth={14}
                                    // minimo de altura quando for 0
                                    minHeight={3}
                                    barBorderRadius={3}
                                    spacing={14}
                                    // espaçamento inicial
                                    initialSpacing={6}
                                    //disableScroll={true}
                                    // quantidade de números do lado
                                    noOfSections={3}
                                    // linha preta que fica no lado
                                    yAxisThickness={0}
                                    // linha preta que fica embaixo
                                    xAxisThickness={0}
                                    yAxisTextStyle={{color: "gray",  fontSize: 11}}
                                    xAxisLabelTextStyle={{color: "gray"}}
                                    isAnimated
                                    dashGap={10}
                                    focusBarOnPress={true}
                                    focusedBarConfig={{
                                        color: "#2b972b",
                                        width: 35
                                    }}
                                    renderTooltip={(item, index) => {
                                        return(
                                            <View style={{
                                                backgroundColor: "#d8d8d89d",
                                                bottom: -79,
                                                //marginLeft: -6,
                                                paddingHorizontal: 6,
                                                paddingVertical: 4,
                                                borderRadius: 6
                                            }}>
                                                <Text style={{fontWeight: 'bold', color: "#303030"}}>{item.value}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            :   selectButton === 3 ?
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                                    <Text style={{...styles.text, color: "#545454", fontSize: 18}}>Desempenho anual</Text>
                                    <Text style={{...styles.text, color: "#e9584e", fontSize:18 }}> Despesas</Text>
                                </View>
                            
                                <BarChart
                                    data={despesa}
                                    height={150}
                                    width={350}
                                    frontColor={'#e9584e'}
                                    // grossura do gráfico
                                    barWidth={14}
                                    // minimo de altura quando for 0
                                    minHeight={3}
                                    barBorderRadius={3}
                                    spacing={14}
                                    // espaçamento inicial
                                    initialSpacing={6}
                                    //disableScroll={true}
                                    // quantidade de números do lado
                                    noOfSections={3}
                                    // linha preta que fica no lado
                                    yAxisThickness={0}
                                    // linha preta que fica embaixo
                                    xAxisThickness={0}
                                    yAxisTextStyle={{color: "gray",  fontSize: 11}}
                                    xAxisLabelTextStyle={{color: "gray"}}
                                    isAnimated
                                    dashGap={10}
                                    focusBarOnPress={true}
                                    focusedBarConfig={{
                                        color: "#e9584e",
                                        width: 35
                                    }}
                                    renderTooltip={(item, index) => {
                                        return(
                                            <View style={{
                                                backgroundColor: "#d8d8d89d",
                                                bottom: -79,
                                                //marginLeft: -6,
                                                paddingHorizontal: 6,
                                                paddingVertical: 4,
                                                borderRadius: 6
                                            }}>
                                                <Text style={{fontWeight: 'bold', color: "#303030"}}>{item.value}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            :
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                                    <Text style={{...styles.text, color: "#545454", fontSize: 18}}>Desempenho anual</Text>
                                    <Text style={{...styles.text, color: "#dbb038", fontSize: 18}}>Geral</Text>
                                </View>
                            
                                <BarChart
                                    data={barData}
                                    height={150}
                                    width={350}
                                    // grossura do gráfico
                                    barWidth={14}
                                    // minimo de altura quando for 0
                                    minHeight={3}
                                    barBorderRadius={3}
                                    spacing={14}
                                    // espaçamento inicial
                                    initialSpacing={6}
                                    //disableScroll={true}
                                    // quantidade de números do lado
                                    noOfSections={3}
                                    // linha preta que fica no lado
                                    yAxisThickness={0}
                                    // linha preta que fica embaixo
                                    xAxisThickness={0}
                                    yAxisTextStyle={{color: "gray",  fontSize: 11}}
                                    xAxisLabelTextStyle={{color: "gray"}}
                                    isAnimated
                                    dashGap={10}
                                    focusBarOnPress={true}
                                    focusedBarConfig={{
                                        color: "#dbb038",
                                        width: 35
                                    }}
                                    onPress={(item, index) => console.log('Item', item)}
                                    renderTooltip={(item, index) => {
                                        return(
                                            <View style={{
                                                backgroundColor: "#d8d8d89d",
                                                bottom: -79,
                                                //marginLeft: -6,
                                                paddingHorizontal: 6,
                                                paddingVertical: 4,
                                                borderRadius: 6
                                            }}>
                                                <Text style={{fontWeight: 'bold', color: "#303030"}}>{item.value}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            }
                        </View>
                    </View>
                        
                    <View style={styles.buttonsFiltro}>
                
                        <TouchableOpacity onPress={() => setSelectButton(4)}>
                            {selectButton === 4 ? <View style={{...styles.buttonPress, backgroundColor: "#dbc338"}}>
                                <Text style={{...styles.textButtons, color: "white"}}>Geral</Text>
                            </View> 
                                : 
                            <View style={{...styles.button,  borderColor: "#dbc338"}}>
                                <Text style={{...styles.textButtons, color: "#dbc338"}}>Receita</Text>
                            </View>}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSelectButton(1)}>
                            {selectButton === 1 ? <View style={{...styles.buttonPress, backgroundColor: "#3884db"}}>
                                <Text style={{...styles.textButtons, color: "white"}}>Receita</Text>
                            </View> 
                                : 
                            <View style={{...styles.button,  borderColor: "#3884db"}}>
                                <Text style={{...styles.textButtons, color: "#3884db"}}>Receita</Text>
                            </View>}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSelectButton(2)}>
                            {selectButton === 2 ? <View style={ styles.buttonPress }>
                                <Text style={{...styles.textButtons, color: "white"}}>Lucro</Text>
                            </View>
                                :
                            <View style={styles.button}>
                                <Text style={styles.textButtons}>Lucro</Text>
                            </View>}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSelectButton(3)}>
                            {selectButton === 3 ? <View style={{...styles.buttonPress, backgroundColor: "#e9584e"}}>
                                <Text style={{...styles.textButtons, color: "white"}}>Despesa</Text>
                            </View>
                                :
                            <View style={{...styles.button, borderColor: '#e9584e'}}>
                                <Text style={{...styles.textButtons, color: "#e9584e", fontSize: 15}}>Despesas</Text>
                            </View>}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: "center"}}>
                    
                    {/* Esse é o gráfico de Dunet*/}
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

                    {/* Botão para gerar os dados, no caso não vai precisar*/}
                    <TouchableOpacity onPress={generateData}>
                        <Text>Gerar número</Text>
                    </TouchableOpacity>
                    {data.map((item, index) => {
                        return <RenderItem item={item} index={index} key={index} />
                    })}
                </View>

                <View style={styles.pieChart}>
                    <Text style={styles.titleChart}>Formas de pagemento</Text>
                    <View style={styles.graficoPie}>
                        <View style={styles.graficoPieContainer}>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={series}
                                sliceColor={sliceColor}
                            />
                        </View>
                        <View style={styles.graficoPieContainerLegend}>
                            {pagamento.map((item, index) =>
                                <View key={index} style={styles.containerLegend}>
                                    <View style={styles.viewLegendColor}> 
                                        <Text style={{...styles.legendColor, backgroundColor: item.color}}></Text>
                                    </View>
                                    <View>
                                        <Text style={styles.legendName}>{item.name}</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
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