import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import moment from "moment";

export default function Fechamento({ navigation, route }) {
    const {
        carrinho = [],
        openingTime,
        closingTime,
        expenses = { total: 0, items: [] },
        totalSales = { quantity: 0, total: 0 },
        revenue = 0
    } = route.params || {};

    // Função para calcular a quantidade total de itens vendidos por forma de pagamento
    const calcularQuantidadePorFormaPagamento = (forma) => {
        return carrinho.filter(item => item.formaPagamento === forma).reduce((total, item) => total + item.quantidade, 0);
    };

    // Calcula receita total do dia
    const receitaTotal = carrinho.reduce((total, item) => total + item.price * item.quantidade, 0).toFixed(2);

    // Formata as datas e horas
    const openingMoment = openingTime ? moment(openingTime) : null;
    const closingMoment = closingTime ? moment(closingTime) : null;

    const abertura = openingMoment ? openingMoment.format('HH:mm - DD/MM/YYYY') : "Não aberto";
    const fechamento = closingMoment ? closingMoment.format('HH:mm') : "Não fechado";
    const horasTrabalhadas = openingMoment && closingMoment
        ? moment.duration(closingMoment.diff(openingMoment)).humanize()
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
