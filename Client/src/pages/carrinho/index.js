import React, { useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import stylesList from "../venda/stylesList.js";
import axios from "axios";

export default function Carrinho({ navigation, route }) {
    const { carrinho } = route.params || { carrinho: [] };
    const [selectedRadio, setSelectedRadio] = useState(null);

    const realizarVenda = async () => {
        if (selectedRadio === null) {
            Alert.alert('Atenção', 'Selecione uma forma de pagamento.');
            return;
        }

        // Adicionar a forma de pagamento aos itens do carrinho
        const carrinhoComPagamento = carrinho.map(item => ({
            ...item,
            formaPagamento: selectedRadio
        }));

        console.log("Dados a serem enviados:", {
            vendas: carrinhoComPagamento,
            formaPagamento: selectedRadio
        });

        try {
            const response = await axios.post('http://10.0.2.2:5000/api/vendas', {
                vendas: carrinhoComPagamento,
                formaPagamento: selectedRadio
            });

            console.log("Resposta da API:", response.data);

            Alert.alert('Sucesso', 'Venda realizada com sucesso!');
            navigation.navigate("Venda", {
                carrinhoAtualizado: []
            });
        } catch (error) {
            console.error('Erro ao realizar a venda:', error);
            Alert.alert('Erro', 'Não foi possível realizar a venda.');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../images/setaesq.png")} style={{ width: 40, height: 40, marginRight: 20 }} />
                </TouchableOpacity>
                <View style={styles.viewValorCompra}>
                    <Text style={{ ...styles.text, fontSize: 26, paddingTop: 8 }}>Valor total</Text>
                    <Text style={{ ...styles.text, fontWeight: "bold" }}>R$
                        <Text style={{ color: "#f6f6f6" }}>_</Text>
                        <Text style={{ ...styles.text, fontSize: 38, fontWeight: "bold" }}>
                            {carrinho.reduce((total, item) => total + item.price * item.quantidade, 0).toFixed(2)}
                        </Text>
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: 10, flex: 1 }}>
                <FlatList
                    data={carrinho}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingTop: 15 }}
                    renderItem={({ item }) => (
                        <View style={stylesList.produto}>
                            <View style={stylesList.viewTittle}>
                                <Text style={stylesList.titulo}>{item.name}</Text>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                    Quantidade: {item.quantidade}
                                </Text>
                            </View>

                            <View style={stylesList.viewValor}>
                                <Text style={stylesList.sifrao}>R$
                                    <Text style={{ color: "white" }}>_</Text>
                                    <Text style={{ ...stylesList.sifrao, fontSize: 34 }}>{item.price}</Text>
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={styles.venda}>
                <Text style={styles.textValor}>Forma de pagamento</Text>
                <View style={styles.formaPg}>
                    <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                        <View style={styles.wrapper}>
                            <View style={styles.radio}>
                                {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
                            </View>
                            <Text style={styles.textRadio}>Dinheiro</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                        <View style={styles.wrapper}>
                            <View style={styles.radio}>
                                {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
                            </View>
                            <Text style={styles.textRadio}>PIX</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelectedRadio(3)}>
                        <View style={styles.wrapper}>
                            <View style={styles.radio}>
                                {selectedRadio === 3 ? <View style={styles.radioBg}></View> : null}
                            </View>
                            <Text style={styles.textRadio}>Cartão</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnVender} onPress={realizarVenda}>
                    <Text style={styles.textButton}>Vender</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
