import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import axios from "axios";
import moment from "moment";

export default function Fechamento({ route, navigation }) {
  const [data, setData] = useState({});
  const { openingTime, closingTime } = route.params || {};

  useEffect(() => {
    const fetchFechamento = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:5000/api/fechamento');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar fechamento:', error.response ? error.response.data : error.message);
        Alert.alert('Erro', 'Não foi possível buscar o fechamento.');
      }
    };

    fetchFechamento();
  }, []);

  const { receitaTotal, quantidadePorFormaPagamento, totalSales, revenue } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fechamento</Text>
      <Text style={styles.text}>Abertura: {moment(openingTime).format('HH:mm - DD/MM/YYYY')}</Text>
      <Text style={styles.text}>Fechamento: {moment(closingTime).format('HH:mm - DD/MM/YYYY')}</Text>
      <Text style={styles.text}>Total de Vendas: {totalSales ? totalSales : '0'}</Text>
      <Text style={styles.text}>Receita: {receitaTotal ? receitaTotal : '0.00'}</Text>
      {quantidadePorFormaPagamento && (
        <View>
          {Object.keys(quantidadePorFormaPagamento).map((formaPagamento) => (
            <Text key={formaPagamento} style={styles.text}>
              {formaPagamento}: {quantidadePorFormaPagamento[formaPagamento]}
            </Text>
          ))}
        </View>
      )}
      <Button title="Voltar para Venda" onPress={() => navigation.navigate('Venda')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
