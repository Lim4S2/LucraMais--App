import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import axios from 'axios';
import styles from "./style";
import moment from 'moment';

export default function Fechamento({ navigation }) {
  const [fechamento, setFechamento] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
      const fetchFechamento = async () => {
          try {
              const response = await axios.get('http://10.0.2.2:5000/api/fechamento');
              const dados = response.data;

              // Processar os dados conforme necessário
              const abertura = moment(dados[0]?.openingTime).format('HH:mm');
              const fechamentoHora = moment(dados[0]?.closingTime).format('HH:mm');
              const horasTrabalhadas = moment.duration(moment(dados[0]?.closingTime).diff(moment(dados[0]?.openingTime))).humanize();

              setFechamento({
                  abertura,
                  fechamentoHora,
                  horasTrabalhadas,
                  receitaTotal: dados[0]?.revenue,
                  totalSales: dados[0]?.totalSales,
                  salesCash: dados[0]?.salesCash,
                  salesPix: dados[0]?.salesPix,
                  salesCard: dados[0]?.salesCard,
              });
          } catch (error) {
              setErro('Não foi possível buscar os dados de fechamento.');
              console.error('Erro ao buscar fechamento:', error);
          }
      };

      fetchFechamento();
  }, []);

  if (erro) {
      return (
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Text>{erro}</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text>Voltar</Text>
              </TouchableOpacity>
          </View>
      );
  }

  if (!fechamento) {
      return (
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Text>Carregando...</Text>
          </View>
      );
  }


    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.container}>
                <Image source={require("../../images/iconFechaCaixa.png")}
                    style={{ width: 40, height: 40, marginRight: 20 }} />
                <Text style={styles.text}>Fechamento do dia</Text>
            </View>

            <Text style={{ fontSize: 18, marginTop: 20 }}>Caixa aberto -
                <Text style={{ color: "#f6f6f6" }}>_</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>{fechamento.abertura}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Fechou caixa -
                <Text style={{ color: "#f6f6f6" }}>_</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>{fechamento.fechamentoHora}</Text>
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Horas trabalhadas -
                <Text style={{ color: "#f6f6f6" }}>_</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>{fechamento.horasTrabalhadas}</Text>
            </Text>

            <View style={styles.viewLucro}>
                <Text style={{ ...styles.text, fontSize: 20 }}>Receita do Dia</Text>
                <Text style={{ ...styles.text, fontSize: 30, color: "white" }}>R$
                    <Text style={{ color: "#04414b" }}>_</Text>
                    <Text style={{ ...styles.text, fontSize: 50, color: "white" }}>{fechamento.receitaTotal}</Text>
                </Text>
            </View>

            <View style={styles.viewDetalhamento}>
                <Text style={styles.textDetalhe}>Lucro do dia</Text>
                <Text style={{ ...styles.textDetalhe, color: "green" }}>{fechamento.receitaTotal}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={styles.viewDetalhamento}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../../images/setaDireita.png")}
                        style={{ width: 15, height: 15, marginRight: 10 }} />
                    <Text style={styles.textDetalhe}>Despesas</Text>
                </View>
                <Text style={{ ...styles.textDetalhe, color: "red" }}>{fechamento.despesas}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.viewDetalhamento}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../../images/setaDireita.png")}
                        style={{ width: 15, height: 15, marginRight: 10 }} />
                    <Text style={styles.textDetalhe}>Qnt. de vendas</Text>
                </View>
                <Text style={{ ...styles.textDetalhe, color: "blue" }}>{fechamento.totalSales}</Text>
            </TouchableOpacity>

            <Text style={{ ...styles.text, fontSize: 22, marginBottom: 15, marginTop: 20, color: "#04414b" }}>Formas de Pagamento</Text>

            <View style={{ ...styles.viewDetalhamento, width: "70%" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.img}
                        source={require("../../images/iconDinheiro.png")} />
                    <Text style={styles.textDetalhe}>Dinheiro</Text>
                </View>
                <Text style={styles.textDetalhe}>{fechamento.salesCash}</Text>
            </View>

            <View style={{ ...styles.viewDetalhamento, width: "70%" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.img}
                        source={require("../../images/iconPix.png")} />
                    <Text style={styles.textDetalhe}>PIX</Text>
                </View>
                <Text style={styles.textDetalhe}>{fechamento.salesPix}</Text>
            </View>

            <View style={{ ...styles.viewDetalhamento, width: "70%" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.img}
                        source={require("../../images/iconCartão.png")} />
                    <Text style={styles.textDetalhe}>Cartão</Text>
                </View>
                <Text style={styles.textDetalhe}>{fechamento.salesCard}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")}
                style={styles.button}>
                <Text style={{ ...styles.text, color: "white", fontSize: 20 }}>Voltar para a tela inicial</Text>
            </TouchableOpacity>
        </View>
    );
}
