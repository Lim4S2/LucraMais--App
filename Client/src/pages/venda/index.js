import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import axios from "axios";
import styles from "./style";
import stylesList from "../venda/stylesList.js";
import moment from "moment";

export default function Venda({ navigation, route }) {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [openingTime] = useState(moment()); // Obtendo o horário de abertura
    const { carrinhoAtualizado } = route.params || {}; // Recebendo o carrinho atualizado

    useEffect(() => {
        if (carrinhoAtualizado) {
            setCarrinho(carrinhoAtualizado);
        }
    }, [carrinhoAtualizado]);

    const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:5000/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            Alert.alert('Erro', 'Não foi possível carregar os produtos.');
        }
    };

    useEffect(() => {
        fetchProdutos();
    }, []);

    const adicionarAoCarrinho = (item) => {
        setCarrinho((prevCarrinho) => {
            const itemExistente = prevCarrinho.find(prod => prod.id === item.id);
            if (itemExistente) {
                return prevCarrinho.map(prod =>
                    prod.id === item.id ? { ...prod, quantidade: prod.quantidade + 1 } : prod
                );
            } else {
                return [...prevCarrinho, { ...item, quantidade: 1 }];
            }
        });
    };

    const removerDoCarrinho = (item) => {
        setCarrinho((prevCarrinho) => {
            const itemExistente = prevCarrinho.find(prod => prod.id === item.id);
            if (itemExistente && itemExistente.quantidade > 1) {
                return prevCarrinho.map(prod =>
                    prod.id === item.id ? { ...prod, quantidade: prod.quantidade - 1 } : prod
                );
            } else {
                return prevCarrinho.filter(prod => prod.id !== item.id);
            }
        });
    };

    const fecharCaixa = async () => {
        const totalSales = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
        const receitaTotal = carrinho.reduce((acc, item) => acc + item.price * item.quantidade, 0).toFixed(2);
        const closingTime = moment(); // Registra o horário de fechamento
    
        console.log("Dados para Fechamento:", {
            carrinho,
            openingTime: openingTime.format(),
            closingTime: closingTime.format(),
            totalSales,
            revenue: receitaTotal
        });
    
        try {
            const response = await axios.post('http://10.0.2.2:5000/api/fechamento', {
                openingTime: openingTime.format(),
                closingTime: closingTime.format(),
                totalSales,
                revenue: receitaTotal
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            console.log('Resposta do servidor:', response.data);
    
            // Navegar para a tela de fechamento
            navigation.navigate("Despesas", {
                openingTime: openingTime.format(),
                closingTime: closingTime.format()
            });
        } catch (error) {
            console.error('Erro ao registrar fechamento:', error.response ? error.response.data : error.message);
            Alert.alert('Erro', 'Não foi possível registrar o fechamento.');
        }
    };    

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("Carrinho", { carrinho })}>
                    <Image source={require("../../images/iconCesta.png")} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={fecharCaixa} style={styles.btnFechar}>
                    <Text style={styles.text}>Fechar caixa</Text>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", marginBottom: 20, marginTop: 15 }}>
                <Text style={{ ...styles.text, color: "#545454" }}>
                    Caixa aberto em
                    <Text style={{ color: "white" }}>_</Text>
                    <Text style={{ ...styles.text, color: "#545454" }}>
                        {openingTime ? moment(openingTime).format('HH:mm - DD/MM/YYYY') : "Não aberto"}
                    </Text>
                </Text>
            </View>

            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingTop: 15, paddingBottom: 20 }}
                renderItem={({ item }) => {
                    const itemCarrinho = carrinho.find(prod => prod.id === item.id);
                    const quantidade = itemCarrinho ? itemCarrinho.quantidade : 0;

                    return (
                        <View style={stylesList.produto}>
                            <View style={stylesList.viewTittle}>
                                <Text style={stylesList.titulo}>{item.name}</Text>
                                <View style={stylesList.viewAddCar}>
                                    <TouchableOpacity
                                        style={stylesList.btnMenos}
                                        onPress={() => removerDoCarrinho(item)}
                                        disabled={quantidade === 0}
                                    >
                                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{quantidade}</Text>

                                    <TouchableOpacity
                                        style={{ ...stylesList.btnMenos, backgroundColor: "#3bdcc2" }}
                                        onPress={() => adicionarAoCarrinho(item)}
                                    >
                                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>+</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => navigation.navigate("Carrinho", {carrinho})}>
                                        <Image source={require("../../images/cesta.png")}
                                            style={{ width: 30, height: 30, marginLeft: 50 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={stylesList.viewValor}>
                                <Text style={stylesList.sifrao}>R$
                                    <Text style={{ ...stylesList.sifrao, fontSize: 34 }}> {item.price}</Text>
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}