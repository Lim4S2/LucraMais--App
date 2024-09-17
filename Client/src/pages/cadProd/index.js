import React, { useState } from "react";
import { Pressable, Text, TextInput, View, Keyboard, TouchableOpacity, Alert } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";
import styles from "./style";

export default function Produto({ navigation }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [saleType, setSaleType] = useState('');
    const [category, setCategory] = useState('');

    const handleRegisterProduct = async () => {
        if (!name || !description || !quantity || !price || !saleType || !category) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        const quantityNumber = parseInt(quantity);
        const priceNumber = parseFloat(price);

        if (isNaN(quantityNumber) || isNaN(priceNumber)) {
            Alert.alert('Erro', 'Quantidade e preço devem ser números válidos.');
            return;
        }

        try {
            const response = await axios.post('http://10.0.2.2:5000/api/products', {
                name,
                description,
                quantity: quantityNumber,
                price: priceNumber,
                saleType,
                category
            });

            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
            setName('');
            setDescription('');
            setQuantity('');
            setPrice('');
            setSaleType('');
            setCategory('');
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error.response ? error.response.data : error.message);
            Alert.alert('Erro', 'Não foi possível cadastrar o produto.');
        }
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.setaEsq} onPress={() => navigation.navigate("Estoque")}>➱</Text>
                <Text style={styles.titleText}>Cadastro de produto</Text>
            </View>
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Nome do produto"
                        placeholderTextColor={"#0C1B10"}
                    />

                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Descrição"
                        placeholderTextColor={"#0C1B10"}
                    />

                    <TextInput
                        style={styles.input}
                        value={quantity}
                        onChangeText={setQuantity}
                        keyboardType="numeric"
                        placeholder="Quantidade"
                        placeholderTextColor={"#0C1B10"}
                    />

                    <TextInputMask
                        type={"money"}
                        style={styles.input}
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="numeric"
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: ''
                          }}
                        //placeholder="Preço"
                        //placeholderTextColor={"#0C1B10"}
                    />

                    <TextInput
                        style={styles.input}
                        value={saleType}
                        onChangeText={setSaleType}
                        placeholder="Tipo de venda"
                        placeholderTextColor={"#0C1B10"}
                    />

                    <TextInput
                        style={styles.input}
                        value={category}
                        onChangeText={setCategory}
                        placeholder="Categoria"
                        placeholderTextColor={"#0C1B10"}
                    />
                </View>
            </Pressable>
            <View style={styles.buttons}>
                <Text onPress={() => navigation.navigate("Home")} style={styles.btnCancel}>✘ Cancelar</Text>
                <TouchableOpacity onPress={handleRegisterProduct} style={styles.btnCad}>
                    <Text style={styles.textButtom}> ✓ Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
}
