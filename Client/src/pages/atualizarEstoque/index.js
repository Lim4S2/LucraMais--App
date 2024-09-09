import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';
import styles from "./style"; // Certifique-se de que o caminho está correto

export default function AtualizarProd({ route, navigation }) {
    const { produto } = route.params; // Recebe o produto passado
    const [name, setName] = useState(produto.name || '');
    const [description, setDescription] = useState(produto.description || '');
    const [quantity, setQuantity] = useState(produto.quantity.toString() || '0');
    const [price, setPrice] = useState(produto.price.toString() || '0.00');
    const [category, setCategory] = useState(produto.category || '');

    const handleUpdateProduct = async () => {
        if (!name || !description || !quantity || !price || !category) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        try {
            const response = await axios.put(`http://10.0.2.2:5000/produtos/${produto.id}`, {
                name,
                description,
                quantity: parseInt(quantity),
                price: parseFloat(price),
                category
            });
            console.log('Produto atualizado com sucesso:', response.data);
            navigation.goBack(); // Volta para a tela anterior
        } catch (error) {
            console.error('Erro ao atualizar produto:', error.response?.data || error.message);
            Alert.alert('Erro', 'Não foi possível atualizar o produto');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleText}>Atualizar Produto</Text>
            </View>
            
            <View style={styles.form}>
                <Text style={styles.label}>Nome do Produto</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Nome do Produto"
                    style={styles.input}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Descrição"
                    style={styles.input}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Quantidade</Text>
                <TextInput
                    value={quantity}
                    onChangeText={setQuantity}
                    placeholder="Quantidade"
                    keyboardType="numeric"
                    style={styles.input}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Preço</Text>
                <TextInput
                    value={price}
                    onChangeText={setPrice}
                    placeholder="Preço"
                    keyboardType="numeric"
                    style={styles.input}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Categoria</Text>
                <TextInput
                    value={category}
                    onChangeText={setCategory}
                    placeholder="Categoria"
                    style={styles.input}
                />
            </View>
            
            <View style={styles.buttons}>
                <View style={styles.btnCad}>
                    <Button title="Atualizar" onPress={handleUpdateProduct} color="#FFF" />
                </View>
                <View style={styles.btnCancel}>
                    <Button title="Cancelar" onPress={() => navigation.goBack()} color="#FFF" />
                </View>
            </View>
        </View>
    );
}
