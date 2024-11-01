import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import axios from 'axios';
import styles from "./style";
import moment from 'moment';
import { BarChart } from "react-native-gifted-charts";

export default function Fechamento({ navigation }) {
  const [fechamento, setFechamento] = useState(null);
  const [erro, setErro] = useState(null);

  const data = [
    {value: 20, label: "7h"},
    {value: 30, label: "8h"},
    {value: 60, label: "9h"},
    {value: 45, label: "10h"},
    {value: 30, label: "11h"},
    {value: 20, label: "12h"},
    {value: 15, label: "13h"},
  ];

  useEffect(() => {
    const fetchFechamento = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:5000/api/fechamento');
        const dados = response.data;

        // Processar os dados conforme necessário
        const abertura = moment(dados.openingTime).format('HH:mm');
        const fechamentoHora = moment(dados.closingTime).format('HH:mm');
        const horasTrabalhadas = moment.duration(moment(dados.closingTime).diff(moment(dados.openingTime))).humanize();

        setFechamento({
          abertura,
          fechamentoHora,
          horasTrabalhadas,
          receitaTotal: dados.revenue,
          totalSales: dados.totalSales,
          salesCash: dados.salesCash,
          salesPix: dados.salesPix,
          salesCard: dados.salesCard,
          despesas: dados.despesasTotal,
          lucro: dados.lucroTotal,
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
        <Text style={{ color: 'red' }}>{erro}</Text>
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
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Fechamento do dia - </Text>
        <Text style={styles.text}>25/10</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', paddingBottom: 25 }}>
        
        <View style={{ alignItems: 'center', width: '90%' }}>
          <Text style={{ fontSize: 18, marginTop: 20 }}>
            Caixa aberto - 
            <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}> {fechamento.abertura}</Text>
          </Text>

          <Text style={{ fontSize: 18, marginTop: 5 }}>
            Fechou caixa - 
            <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}> {fechamento.fechamentoHora}</Text>
          </Text>

          <Text style={{ fontSize: 18, marginTop: 10 }}>
            Horas trabalhadas - 
            <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}> {fechamento.horasTrabalhadas}</Text>
          </Text>
        </View>

        <View style={styles.viewLucro}>
          <Text style={{ ...styles.text, fontSize: 20 }}>Receita do Dia</Text>
          <Text style={{ ...styles.text, fontSize: 30, color: "white" }}>
            R$ <Text style={{ ...styles.text, fontSize: 50, color: "white" }}> {fechamento.receitaTotal}</Text>
          </Text>
        </View>

        <View style={styles.viewDetalhamento}>
          <Text style={styles.textDetalhe}>Lucro do dia</Text>
          <Text style={{ ...styles.textDetalhe, color: "green" }}>R$ {fechamento.lucro}</Text>
        </View>

        <View style={styles.viewDetalhamento}>
          <Text style={styles.textDetalhe}>Despesas</Text>
          <Text style={{ ...styles.textDetalhe, color: "red" }}>R$ {fechamento.despesas}</Text>
        </View>

        <View style={styles.viewDetalhamento}>
          <Text style={styles.textDetalhe}>Qnt. de vendas</Text>
          <Text style={{ ...styles.textDetalhe, color: "#3884db" }}>{fechamento.totalSales}</Text>
        </View>
        
        <View style={{ ...styles.viewDetalhamento, marginBottom: 0 }}>
          <Text style={styles.textDetalhe}>Ganho por hora</Text>
          <Text style={{ ...styles.textDetalhe, color: "#04414b" }}>R$ 28,50</Text>
        </View>

        <Text style={{ ...styles.text, fontSize: 24, marginTop: "15%", marginBottom: "8%", color: "#04414b" }}>Período com mais vendas</Text>
        
        <View style={{ width: '80%', alignItems: 'center', marginBottom: 15 }}>
          <BarChart
            data={data}
            spacing={12}
            initialSpacing={5}
            width={280}
            height={100}
            barWidth={28}
            frontColor={"#6294ac"}
            minHeight={3}
            barBorderRadius={3}
            noOfSections={4}
            yAxisThickness={0}
            xAxisThickness={0}
            isAnimated
            yAxisTextStyle={{ color: "gray", fontSize: 14 }}
            xAxisLabelTextStyle={{ color: "gray" }}
            dashGap={10}
            disableScroll={true}
          />
        </View>

        <View style={{ ...styles.viewDetalhamento, marginBottom: 0 }}>
          <Text style={styles.textDetalhe}>Média de produtos vendidos</Text>
          <Text style={{ ...styles.textDetalhe, color: "#6294ac" }}>{(fechamento.totalSales / 7).toFixed(2)}</Text>
        </View>

        <Text style={{ ...styles.text, fontSize: 24, marginTop: "15%", marginBottom: "8%", color: "#04414b" }}>Forma de pagamento</Text>

        <View style={styles.viewDetalhamento}>
          <Text style={styles.textDetalhe}>Dinheiro</Text>
          <Text style={{ ...styles.textDetalhe, color: "gray" }}>{fechamento.salesCash}</Text>
        </View>

        <View style={styles.viewDetalhamento}>
          <Text style={styles.textDetalhe}>Pix</Text>
          <Text style={{ ...styles.textDetalhe, color: "gray" }}>{fechamento.salesPix}</Text>
        </View>

        <View style={styles.viewDetalhamento}>
          <Text style={styles.textDetalhe}>Cartão</Text>
          <Text style={{ ...styles.textDetalhe, color: "gray" }}>{fechamento.salesCard}</Text>
        </View>

        <View style={{ ...styles.viewDetalhamento, marginBottom: 20 }}>
          <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate("Venda")}>
            <Text style={styles.textBtn}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
