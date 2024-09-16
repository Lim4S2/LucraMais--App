import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import axios from "axios";
import styles from "./style";
import moment from "moment";

export default function Fechamento({ navigation, route }) {
    const [dadosVendas, setDadosVendas] = useState([]);
    const [receitaTotal, setReceitaTotal] = useState("0.00");
    const [totalSales, setTotalSales] = useState({ quantity: 0, total: "0.00" });
    const [openingTime, setOpeningTime] = useState(null);
    const [closingTime, setClosingTime] = useState(null);

    useEffect(() => {
        const fetchFechamento = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:5000/api/vendas'); // Altere a URL conforme necessário
                const vendas = response.data;

                // Assume-se que os dados incluem openingTime e closingTime
                setOpeningTime(moment(vendas.openingTime));
                setClosingTime(moment(vendas.closingTime));

                // Calcular receita total e vendas totais
                const receita = vendas.vendas.reduce((total, item) => total + item.price * item.quantidade, 0).toFixed(2);
                const totalSalesData = {
                    quantity: vendas.vendas.reduce((acc, item) => acc + item.quantidade, 0),
                    total: receita
                };

                setDadosVendas(vendas.vendas);
                setReceitaTotal(receita);
                setTotalSales(totalSalesData);
            } catch (error) {
                console.error('Erro ao buscar dados de fechamento:', error);
                Alert.alert('Erro', 'Não foi possível carregar os dados de fechamento.');
            }
        };

        fetchFechamento();
    }, []);

    // Função para calcular a quantidade total de itens vendidos por forma de pagamento
    const calcularQuantidadePorFormaPagamento = (forma) => {
        return dadosVendas.filter(item => item.formaPagamento === forma).reduce((total, item) => total + item.quantidade, 0);
    };

    // Formata as datas e horas
    const abertura = openingTime ? openingTime.format('HH:mm - DD/MM/YYYY') : "Não disponível";
    const fechamento = closingTime ? closingTime.format('HH:mm') : "Não disponível";
    const horasTrabalhadas = openingTime && closingTime
        ? `${moment.duration(closingTime.diff(openingTime)).hours()}h ${moment.duration(closingTime.diff(openingTime)).minutes()}m`
        : "Não disponível";

    const paymentMethods = [
        { type: 1, label: "Dinheiro" },
        { type: 2, label: "PIX" },
        { type: 3, label: "Cartão" }
    ];

    return (
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <View style={styles.container}>
                <Image source={require("../../images/iconFechaCaixa.png")} style={{ width: 40, height: 40, marginRight: 20 }} />
                <Text style={styles.text}>Fechamento do dia</Text>
            </View>

            <Text style={{ fontSize: 18, marginTop: 20 }}>
                Caixa aberto - <Text style={{ color: "#f6f6f6" }}>_</Text><Text style={{ fontSize: 18, marginTop: 10 }}>{abertura}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Fechou caixa - <Text style={{ color: "#f6f6f6" }}>_</Text><Text style={{ fontSize: 18, marginTop: 10 }}>{fechamento}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Horas trabalhadas - <Text style={{ color: "#f6f6f6" }}>_</Text><Text style={{ fontSize: 18, marginTop: 10 }}>{horasTrabalhadas}</Text>
            </Text>

            <View style={styles.viewLucro}>
                <Text style={{ ...styles.text, fontSize: 20 }}>Receita do Dia</Text>
                <Text style={{ ...styles.text, fontSize: 30, color: "green" }}>
                    R$ <Text style={{ color: "#f6f6f6" }}>_</Text><Text style={{ ...styles.text, fontSize: 48, color: "green" }}>{receitaTotal}</Text>
                </Text>
            </View>

            <View style={styles.viewDetalhamento}>
                <Text style={styles.textDetalhe}>Lucro do dia</Text>
                <Text style={{ ...styles.textDetalhe, color: "green" }}>{receitaTotal}</Text>
            </View>

            <View>
                {paymentMethods.map((method, index) => (
                    <View key={index} style={{ ...styles.viewDetalhamento, width: "70%" }}>
                        <Text style={{ ...styles.textDetalhe, color: "blue" }}>{method.label}</Text>
                        <Text style={{ ...styles.textDetalhe, color: "blue" }}>
                            {calcularQuantidadePorFormaPagamento(method.type)}
                        </Text>
                    </View>
                ))}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={{ ...styles.text, color: "white", fontSize: 20 }}>Voltar para a tela inicial</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
