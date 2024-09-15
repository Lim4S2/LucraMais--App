import React, { useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import stylesList from "../venda/stylesList.js";

export default function Carrinho({ navigation, route }) {
    const { carrinho } = route.params || { carrinho: [] };
    const [selectedRadio, setSelectedRadio] = useState(null);

    const realizarVenda = () => {
        if (selectedRadio === null) {
            Alert.alert('Atenção', 'Selecione uma forma de pagamento.');
            return;
        }

        // Armazenar as informações da venda
        const carrinhoComPagamento = carrinho.map(item => ({
            ...item,
            formaPagamento: selectedRadio
        }));

        // Adicionar as informações ao contexto ou storage se necessário
        // Aqui estamos simplesmente retornando para a tela Venda
        navigation.navigate("Venda", {
            carrinhoAtualizado: carrinhoComPagamento
        });
    };

    return (
        <View style={{ height: "100%" }}>
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

            <View style={{ marginTop: 10, height: "60%" }}>
                <FlatList
                    data={carrinho}
                    contentContainerStyle={{ paddingTop: 15 }}
                    renderItem={({ item }) => (
                        <View>
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
