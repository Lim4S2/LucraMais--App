import React from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import styles from "./style"

export const Balancete = [
    
    {
        title: 'Despesas',
        valor: 1123.50,
        detalhe: [
            {
                text: "Transporte",
                valor: 50
            }
        ]
    },
    {
        title: "Produtos estragados",
        valor: 123.50
    },
    {
        title: "Teste",
        valor: 5000
    }
    
]

export default function Fechamento({ navigation }) {

    const [maisDetalhe, setMaisDetalhe] = React.useState(-1)

    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.container}>
                <Image source={require("../../images/iconFechaCaixa.png")}
                    style={{ width: 40, height: 40, marginRight: 20 }} />
                <Text style={styles.text}>Fechamento do dia</Text>
            </View>

            <Text style={{ fontSize: 18, marginTop: 20 }}>Caixa aberto -
                <Text style={{ color: "#f6f6f6" }}>_</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>08:33</Text>
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Fechou caixa -
                <Text style={{ color: "#f6f6f6" }}>_</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>11:40</Text>
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Horas trabalhadas -
                <Text style={{ color: "#f6f6f6" }}>_</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>03:07</Text>
            </Text>

            <View style={styles.viewLucro}>
                <Text style={{ ...styles.text, fontSize: 20 }}>Receita do Dia</Text>
                <Text style={{ ...styles.text, fontSize: 30, color: "green" }}>R$
                    <Text style={{ color: "#f6f6f6" }}>_</Text>
                    <Text style={{ ...styles.text, fontSize: 48, color: "green" }}>4.693,50</Text>
                </Text>
            </View>


            <View style={styles.viewDetalhamento}>
                <Text style={styles.textDetalhe}>Lucro do dia</Text>
                <Text style={{ ...styles.textDetalhe, color: "green" }}>3.570,00</Text>     
            </View>

                <View>
                <TouchableOpacity activeOpacity={0.5} style={styles.viewDetalhamento}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../images/setaDireita.png")}
                            style={{ width: 15, height: 15, marginRight: 10 }} />

                        <Text style={styles.textDetalhe}>Despesas</Text>
                    </View>
                    <Text style={{ ...styles.textDetalhe, color: "red" }}>1.123,50</Text>
                </TouchableOpacity>
                
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text>Transporte</Text>
                    <Text>R$
                        <Text style={{ color: "#f6f6f6" }}>_</Text>
                        <Text>500</Text>
                    </Text>
                </View>
                
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text>Produtos estragados</Text>
                    <Text>R$
                        <Text style={{ color: "#f6f6f6" }}>_</Text>
                        <Text>123,50</Text>
                    </Text>
                </View>
            </View>

            <View>
                <TouchableOpacity activeOpacity={0.5} style={styles.viewDetalhamento}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image source={require("../../images/setaDireita.png")}
                                style={{ width: 15, height: 15, marginRight: 10 }} />
                        </TouchableOpacity>
                        <Text style={styles.textDetalhe}>Qnt. de vendas</Text>
                    </View>
                    <Text style={{ ...styles.textDetalhe, color: "blue" }}>145</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ ...styles.text, fontSize: 22, marginBottom: 15, marginTop: 20 }}>Formas de Pagamento</Text>

            <View style={{ ...styles.viewDetalhamento, width: "70%" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.img}
                        source={require("../../images/iconDinheiro.png")} />
                    <Text style={styles.textDetalhe}>Dinheiro</Text>
                </View>
                <Text style={styles.textDetalhe}>67</Text>
            </View>

            <View style={{ ...styles.viewDetalhamento, width: "70%" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.img}
                        source={require("../../images/iconPix.png")} />
                    <Text style={styles.textDetalhe}>PIX</Text>
                </View>

                <Text style={styles.textDetalhe}>50</Text>
            </View>

            <View style={{ ...styles.viewDetalhamento, width: "70%" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.img}
                        source={require("../../images/iconCartão.png")} />
                    <Text style={styles.textDetalhe}>Cartão</Text>
                </View>
                <Text style={styles.textDetalhe}>28</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")}
                style={styles.button}>
                <Text style={{ ...styles.text, color: "white", fontSize: 20 }}>Voltar para a tela inicial</Text>
            </TouchableOpacity>
        </View>
    )
}