import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import axios from "axios";
import styles from "./style";
import stylesList from "./stylesList.js";
import moment from "moment";

export default function Venda({ navigation, route}) {
    const [produtos, setProdutos] = useState([]);

    // Função para buscar os produtos do backend
    const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:5000/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            Alert.alert('Erro', 'Não foi possível carregar os produtos.');
        }
    };

    // useEffect para chamar a função quando o componente for montado
    useEffect(() => {
        fetchProdutos();
    }, []);
    const { openingTime } = route.params || {};
    
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
                    <Image source={require("../../images/iconCesta.png")} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Fechamento")} style={styles.btnFechar}>
                    <Text style={styles.text}>Fechar caixa</Text>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", marginBottom: 20, marginTop: 15 }}>
                <Text style={{ ...styles.text, color: "#545454" }}>
                    Caixa aberto em
                    <Text style={{ color: "white" }}>_</Text>
                    {/* Exibindo o horário do caixa */}
                    <Text style={{ ...styles.text, color: "#545454" }}>
                        {openingTime ? moment(openingTime).format('HH:mm - DD/MM/YYYY') : "Não aberto"}
                    </Text>
                </Text>
            </View>
            
            <View>
                <FlatList
                    data={produtos}
                    contentContainerStyle={{ paddingTop: 15, paddingBottom: 20 }}
                    renderItem={({ item }) => {
                        return (
                            <View style={stylesList.produto}>
                                <View style={stylesList.viewTittle}>
                                    <Text style={stylesList.titulo}>{item.name}</Text>
                                    <View style={stylesList.viewAddCar}>
                                        <TouchableOpacity style={stylesList.btnMenos}>
                                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>-</Text>
                                        </TouchableOpacity>

                                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>1</Text>

                                        <TouchableOpacity style={{ ...stylesList.btnMenos, backgroundColor: "#8DEB84" }}>
                                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>+</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <Image source={require("../../images/cesta.png")}
                                                style={{ width: 30, height: 30, marginLeft: 50 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={stylesList.viewValor}>
                                    <Text style={stylesList.sifrao}>R$
                                        <Text style={{ color: "white" }}>_</Text>
                                        <Text style={{ ...stylesList.sifrao, fontSize: 34 }}>{item.price}</Text>
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );
}
