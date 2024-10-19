import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SelectCountry } from 'react-native-element-dropdown'
import axios from 'axios';
import styles from "./style";
import stylesList from "./styleList";

export default function Estoque({ navigation }) {

    const filtro = [
        { label: 'Todos', value: 'Todos' },
        { label: 'Salgado', value: 'Salgado' },
        { label: 'Doce', value: 'Doce' },
        { label: 'Bebida', value: 'Bebida' },
        { label: 'Verdura', value: 'Verdura' },
        { label: 'Fruta', value: 'Fruta' },
    ]

    const [select, setSelect] = useState('0')
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProdutos = useCallback(async () => {
        try {
            const response = await axios.get('http://10.0.2.2:5000/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProdutos();
    }, [fetchProdutos]);

    useFocusEffect(
        useCallback(() => {
            fetchProdutos();
        }, [fetchProdutos])
    );

    const handleDelete = async (id) => {
        try {
            console.log(`Deletando produto com ID: ${id}`);
            const response = await axios.delete(`http://10.0.2.2:5000/produtos/${id}`);
            console.log('Resposta do servidor:', response.data);
            setProdutos((prevProdutos) => prevProdutos.filter((produto) => produto.id !== id));
            Alert.alert('Sucesso', 'Produto excluído com sucesso');
        } catch (error) {
            console.error('Erro ao excluir produto:', error.response ? error.response.data : error.message);
            Alert.alert('Erro', 'Não foi possível excluir o produto');
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Erro: {error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <View style={styles.containerTitle}>
                    <Text style={styles.titleText}>Estoque</Text>
                </View>

                <TouchableOpacity 
                    style={{...styles.buttonCadPro, width: 45, height: 45}}
                    onPress={() => navigation.navigate("Produto")}
                >
                    <Text style={{...styles.textCadProd, fontSize: 30 }}>+</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <View style={styles.viewInput}>
                    <Image style={styles.imgPesq} source={require("../../images/search.png")} />
                    <TextInput 
                        style={{width: "90%", marginRight: 10}}
                        placeholderTextColor={"#808080"}
                        placeholder="Pesquisar"
                        keyboardType="text"
                    />
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: 'center', width: "100%", marginTop: 15}} 
                    accessible={true} accessibilityRole="checkbox">
                    <Text>{produtos.length} produto(s) cadastrado(s)</Text>

                    <SelectCountry
                        style={styles.filtro}
                        value={select}
                        data={filtro}
                        selectedTextStyle={{fontSize: 14,  marginLeft: -5 }}
                        placeholderStyle={{fontSize: 14}}
                        maxHeight={120}
                        valueField='value'
                        showsVerticalScrollIndicator={false}
                        labelField='label'
                        placeholder='Filtro'
                        onChange={(text) =>  setSelect(text)}
                        containerStyle={{
                            width: 100,
                            borderRadius: 10,
                            marginLeft: -5
                        }}
                        renderRightIcon={() => (
                            <Image style={styles.imgFiltro} source={require("../../images/iconFiltro.png")} />
                        )}
                    />
                    
                </View>
            </View>

            <View style={{height: "69%", marginTop: 15}}>
                <FlatList
                    style={stylesList.list}
                    contentContainerStyle={{marginTop: 20}}
                    data={produtos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={stylesList.produto}>
                            <View style={stylesList.viewText}>
                                <Text style={stylesList.titulo}>{item.name}</Text>
                                <Text style={stylesList.descricao}>{item.description}</Text>
                                <View style={stylesList.viewQuant}>
                                    <Text style={stylesList.quant}>{item.quantity}</Text>
                                    <Text style={{...stylesList.quant}}>|</Text>
                                    <Text style={{...stylesList.quant, color:"#6294ac"}}>{item.category}</Text>
                                </View>
                            </View>

                            <View style={stylesList.mais}>
                                <View style={stylesList.valor}>
                                    <Text style={stylesList.sifrao}>R$
                                        <Text style={{...stylesList.sifrao, fontSize: 34}}> {item.price}</Text>
                                    </Text>
                                </View>

                                <View style={stylesList.viewButtons}>
                                    <TouchableOpacity 
                                        style={{...styles.buttonCadPro, backgroundColor: "#8DEB84"}}
                                        onPress={() => navigation.navigate("AtualizarProd", { produto: item })}
                                    >
                                        <Text style={{...stylesList.textCadProd}}>🖊</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                        style={{...styles.buttonCadPro, backgroundColor: "#FF5757"}}
                                        onPress={() => handleDelete(item.id)}
                                    >
                                        <Text style={{...stylesList.textCadProd}}>🗑</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
