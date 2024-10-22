import React, {useEffect, useState} from "react"
import {View, Text, BackHandler, StatusBar, TouchableWithoutFeedback, ScrollView, StyleSheet, Touchable } from "react-native"
import { BarChart, PieChart } from "react-native-gifted-charts"
import styles from "./style"
import { useSharedValue, withTiming } from "react-native-reanimated";
import { generateRandomNumbers } from "../../components/randomGrafico/generateRandom";
import { TouchableOpacity } from "react-native-gesture-handler";
import { calculatePercent } from "../../components/randomGrafico/calculatePorcentage";
import RenderItem from "./renderItem";
import DonutChart from "../../components/randomGrafico/donutChart";
import { useFont } from "@shopify/react-native-skia";

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
    const pagamento = [
        {
            value:  123,
            color: "#9400D3" 
        },
        {
            value:  321,
            color: "#FFA500"
        },
        {
            value:   789,
            color: "#44af4b"
        }
    ]
    
    const barData = [
        // Receita 
        {value: 600, frontColor: '#3884db', spacing: 2, label: "Jan", labelWidth: 40, text: "Receita" },
        // Gasto
        {value: 300, frontColor: '#e9584e', text: "Despesa", spacing: 2 },
        {value: 300, frontColor: '#2b972b', text: "Lucro" },

        {value: 800, frontColor: '#3884db', label: "Fev", spacing: 2, labelWidth: 40, text: "Receita" },
        {value: 400, frontColor: '#e9584e', text: "Despesa" , spacing: 2},
        {value: 400, frontColor: '#2b972b', text: "Lucro" },

        {value: 300, frontColor: '#3884db', label: "Mar", spacing: 2, labelWidth: 40, text: "Receita"},
        {value: 150, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 150, frontColor: '#2b972b', text: "Lucro"},

        {value: 100, frontColor: '#3884db', label: "Abr", spacing: 2, labelWidth: 40, text: "Receita"},
        {value: 50, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 50, frontColor: '#2b972b', text: "Lucro"},

        {value: 1000, frontColor: '#3884db', label: "Mai", spacing: 2, labelWidth: 40, text: "Receita"},
        {value: 500, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 500, frontColor: '#2b972b', text: "Lucro"},

        {value: 950, frontColor: '#3884db', label: "Jun", spacing: 2, labelWidth: 40, text: "Receita"},
        {value: 475, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 475, frontColor: '#2b972b', text: "Lucro", spacing: 82},

        {value: 175, frontColor: '#3884db', label: "Jul", spacing: 2, labelWidth:  40, text: "Receita"},
        {value: 87, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 87, frontColor: '#2b972b', text: "Lucro"},
        
        {value: 640, frontColor: '#3884db', label: "Ago" , spacing: 2, labelWidth: 40, text: "Receita"},
        {value: 230, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 230, frontColor: '#2b972b', text: "Lucro"},

        {value: 230, frontColor: '#3884db', label: "Set",  spacing: 2, labelWidth: 40, text: "Receita" },
        {value: 115, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 115, frontColor: '#2b972b', text: "Lucro"},

        {value: 480, frontColor: '#3884db', label: "Out",  spacing: 2, labelWidth: 40, text: "Receita" },
        {value: 240, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 240, frontColor: '#2b972b', text: "Lucro"},
        
        {value: 480, frontColor: '#3884db', label: "Nov",  spacing: 2, labelWidth: 40, text: "Receita" },
        {value: 240, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 240, frontColor: '#2b972b', text: "Lucro"},

        {value: 480, frontColor: '#3884db', label: "Dez",  spacing: 2, labelWidth: 40, text: "Receita" },
        {value: 240, frontColor: '#e9584e', text: "Despesa", spacing: 2},
        {value: 240, frontColor: '#2b972b', text: "Lucro"},
        
    ]

    const mes = [
        // Receita 
        {value: 600, frontColor: '#3884db', spacing: 2, label: "1° sem", labelWidth: 50, text: "Receita" },
        // Despesa
        {value: 300, frontColor: '#e9584e', spacing: 2, text: "Despesa" },
        // Lucro
        {value: 300, frontColor: '#2b972b', text: "Lucro" },

        {value: 800, frontColor: '#3884db', label: "2° sem", spacing: 2, labelWidth: 50, text: "Receita" },
        {value: 400, frontColor: '#e9584e', spacing: 2, text: "Despesa" },
        {value: 400, frontColor: '#2b972b', text: "Lucro" },

        {value: 300, frontColor: '#3884db', label: "3° sem", spacing: 2, labelWidth: 50, text: "Receita"},
        {value: 150, frontColor: '#e9584e', spacing: 2, text: "Despesa"},
        {value: 150, frontColor: '#2b972b', text: "Lucro"},

        {value: 100, frontColor: '#3884db', label: "4° sem", spacing: 2, labelWidth: 50, text: "Receita"},
        {value: 50, frontColor: '#e9584e', spacing: 2, text: "Despesa"},
        {value: 50, frontColor: '#2b972b', text: "Lucro"}
    ];
    
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

            <TouchableWithoutFeedback onPress={() => navigation.navigate("Fechamento")}>
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
                                                marginLeft: -10,
                                                paddingHorizontal: 6,
                                                paddingVertical: 4,
                                                borderRadius: 6
                                            }}>
                                                <Text style={{fontWeight: 'bold', color: "#303030"}}>R$ {item.value}</Text>
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
                                                marginLeft: -10,
                                                paddingHorizontal: 6,
                                                paddingVertical: 4,
                                                borderRadius: 6
                                            }}>
                                                <Text style={{fontWeight: 'bold', color: "#303030"}}>R$ {item.value}</Text>
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
                                                marginLeft: -10,
                                                paddingHorizontal: 6,
                                                paddingVertical: 4,
                                                borderRadius: 6
                                            }}>
                                                <Text style={{fontWeight: 'bold', color: "#303030"}}>R$ {item.value}</Text>
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
                                    spacing={12}
                                    endSpacing={4}
                                    // espaçamento inicial
                                    initialSpacing={3}
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
                                                marginLeft: -10,
                                                paddingHorizontal: 6,
                                                paddingVertical: 4,
                                                borderRadius: 6,
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{fontWeight: 'bold', color: "#000000"}}>{item.text}</Text>
                                                <Text style={{fontWeight: 'bold', color: "#303030"}}>R$ {item.value}</Text>
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
                                <Text style={{...styles.textButtons, color: "#dbc338"}}>Geral</Text>
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

                    <View style={{ alignItems: 'center'}}>
                        <Text style={{...styles.text, color: "#545454", marginVertical: 20, fontSize: 28}}>Informações do mês</Text>
                        
                        <View style={{flexDirection: 'row', width:  '100%', justifyContent: 'space-between', alignItems: "center",  marginBottom: 15}}>

                            <Text style={{...styles.text, color: "#545454"}}>Outubro</Text>
                            <Text style={{...styles.text, color: "black", fontSize: 35}}>R$ 1.500,00</Text>
                        </View>
                        
                        <BarChart
                            data={mes}
                            height={150}
                            width={340}
                            // grossura do gráfico
                            barWidth={20}
                            // minimo de altura quando for 0
                            minHeight={3}
                            barBorderRadius={3}
                            spacing={14}
                            // espaçamento inicial
                            initialSpacing={6}
                            // quantidade de números do lado
                            noOfSections={3}
                            // linha preta que fica no lado
                            yAxisThickness={0}
                            // linha preta que fica embaixo
                            xAxisThickness={0}
                            yAxisTextStyle={{color: "gray",  fontSize: 11}}
                            xAxisLabelTextStyle={{color: "gray"}}
                            isAnimated
                            disableScroll={true}
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
                                        backgroundColor: "#ffffff0",
                                        bottom: -82,
                                        marginLeft: -4,
                                        paddingHorizontal: 6,
                                        paddingVertical: 4,
                                        borderRadius: 6, 
                                        alignItems: "center"
                                    }}>
                                        <Text style={{fontWeight: 'bold', color: "#000000", fontSize: 10}}>{item.text}</Text>
                                        <Text style={{fontWeight: 'bold', color: "#303030", fontSize: 10}}>R$ {item.value}</Text>
                                    </View>
                                )
                            }}
                        />

                        <View style={{marginTop: 20}}>
                            <View style={styles.infoMes}>
                                <Text style={styles.descMes}>Horas trabalhadas</Text>
                                <Text style={{...styles.descMes, color: 'black'}}>40 h</Text>
                            </View>

                            <View style={styles.infoMes}>
                                <Text style={styles.descMes}>Média de receita</Text>
                                <Text style={{...styles.descMes, color: "black"}}>R$ 500,00</Text>
                            </View>
                            
                            <View style={styles.infoMes}>
                                <Text style={styles.descMes}>Média de gastos</Text>
                                <Text style={{...styles.descMes, color: 'black'}}>R$ 250,00</Text>
                            </View>
                        </View>
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
                    <Text style={{...styles.text, color: "#545454"}}>Formas de pagemento</Text>
                    <View style={styles.graficoPie}>
                        <View style={styles.graficoPieContainer}>
                            <PieChart
                               data={pagamento}
                               radius={85}
                               textColor="white"
                               textSize={14}
                               fontWeight="bold"
                               strokeColor="white"
                               strokeWidth={2}
                            />
                        </View>
                        
                        <View style={styles.graficoPieContainerLegend}>
                                <View style={styles.containerLegend}>
                                    <View style={{...styles.viewLegendColor, backgroundColor: "#44af4b"}}/>
                                    <Text style={styles.legendName}> Dinheiro ➱</Text>
                                    <Text style={{...styles.legendName, color: "#44af4b", fontSize: 20}}> 789</Text>
                                </View>

                                <View style={styles.containerLegend}>
                                    <View style={styles.viewLegendColor}/>
                                    <Text style={styles.legendName}> Cartão ➱</Text>
                                    
                                    <Text style={{...styles.legendName, color: "#9400D3", fontSize: 20}}> 123</Text>
                                </View>
                                
                                <View  style={styles.containerLegend}>
                                    <View style={{...styles.viewLegendColor, backgroundColor: "#FFA500"}}/>
                                    <Text style={styles.legendName}> Pix ➱</Text>
                                    <Text style={{...styles.legendName, color: "#FFA500", fontSize: 20}}> 321</Text>
                                </View>
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