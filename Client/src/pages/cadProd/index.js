import React, { useRef, useState } from "react";
import { Pressable, Text, View, TouchableOpacity, Keyboard, Animated, Alert } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { TextInputMask } from "react-native-masked-text";
import { SelectCountry } from "react-native-element-dropdown";
import axios from "axios";
import styles from "./style";

export default function Produto({ navigation }) {
    const escolha = [
        { value: 'Unitário', label: 'Unitário' },
        { value: 'Quilo', label: 'Quilo' },
        { value: 'Litro', label: 'Litro' },
        { value: 'Caixa', label: 'Caixa' },
        { value: 'Outro', label: 'Outro' }
    ];

    const [country, setCountry] = useState('0');
    const [nomeProd, setNomeProd] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quant, setQuant] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');

    const moneyRef = useRef(null);

    const floatingLabelAnimation = useRef(new Animated.Value(preco ? 1 : 0)).current;

    const handleFocus = () => {
        Animated.timing(floatingLabelAnimation, {
            toValue: 1,
            duration: 350,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        if (!preco) {
            Animated.timing(floatingLabelAnimation, {
                toValue: 0,
                duration: 350,
                useNativeDriver: false,
            }).start();
        }
    };

    const floatingLabelStyle = {
        top: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0],
        }),
        fontSize: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [14, 14],
        }),
        color: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["#0C1B10", "#6294ac"]
        }),
        backgroundColor: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["white", "#fff"]
        }),
        zIndex:  floatingLabelAnimation.interpolate({ 
            inputRange: [0, 1],
            outputRange: [0, 1]
        })

    };

    const handleRegisterProduct = async () => {
        if (!nomeProd || !descricao || !quant || !preco || country === '0' || !categoria) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        const quantNumber = parseInt(quant);
        const precoNumber = parseFloat(preco.replace(/[R$.\s]/g, '').replace(',', '.'));

        if (isNaN(quantNumber) || isNaN(precoNumber)) {
            Alert.alert('Erro', 'Quantidade e preço devem ser números válidos.');
            return;
        }

        try {
            const response = await axios.post('http://10.0.2.2:5000/api/products', {
                name: nomeProd,
                description: descricao,
                quantity: quantNumber,
                price: precoNumber,
                saleType: country,
                category: categoria
            });

            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!', [
                { text: 'OK', onPress: () => navigation.navigate('Home') }
            ]);
            setNomeProd('');
            setDescricao('');
            setQuant('');
            setPreco('');
            setCountry('0');
            setCategoria('');
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
                    <FloatingLabelInput
                        label="Nome do produto"
                        value={nomeProd}
                        containerStyles={styles.input}
                        customLabelStyles={{
                            colorFocused: "#6294ac",
                            fontSizeFocused: 14,
                            colorBlurred: "#0C1B10",
                        }}
                        labelStyles={{
                            backgroundColor: "white",
                            padding: 5,
                            borderRadius: 50
                        }}
                        onChangeText={text => setNomeProd(text)}
                    />
                    <FloatingLabelInput
                        label="Descrição"
                        value={descricao}
                        containerStyles={styles.input}
                        customLabelStyles={{
                            colorFocused: "#6294ac",
                            fontSizeFocused: 14,
                            colorBlurred: "#0C1B10",
                        }}
                        labelStyles={{
                            backgroundColor: "white",
                            padding: 5,
                            borderRadius: 50
                        }}
                        onChangeText={text => setDescricao(text)}
                    />
                    <FloatingLabelInput
                        label="Quantidade"
                        value={quant}
                        containerStyles={styles.input}
                        customLabelStyles={{
                            colorFocused: "#6294ac",
                            fontSizeFocused: 14,
                            colorBlurred: "#0C1B10"
                        }}
                        labelStyles={{
                            backgroundColor: "white",
                            padding: 5,
                            borderRadius: 50
                        }}
                        keyboardType="numeric"
                        onChangeText={text => setQuant(text)}
                    />

                    <View style={styles.viewPreTip}>
                        <View style={{ width: "50%" }}>
                            <Animated.Text style={[styles.label, floatingLabelStyle]}>Preço</Animated.Text>
                            <TextInputMask
                                style={styles.input}
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$ ',
                                    suffixUnit: ''
                                }}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                value={preco}
                                onChangeText={text => setPreco(text)}
                            />
                        </View>
                        <SelectCountry
                            style={styles.dropdow}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholderStyle={styles.placeholderStyle}
                            maxHeight={210}
                            value={country}
                            data={escolha}
                            valueField='value'
                            labelField='label'
                            placeholder="Tipo de Venda"
                            onChange={text => setCountry(text.value)} 
                        />
                    </View>

                    <FloatingLabelInput
                        label="Categoria"
                        value={categoria}
                        containerStyles={styles.input}
                        customLabelStyles={{
                            colorFocused: "#6294ac",
                            fontSizeFocused: 14,
                            colorBlurred: "#0C1B10",
                        }}
                        labelStyles={{
                            backgroundColor: "white",
                            padding: 5,
                            borderRadius: 50
                        }}
                        onChangeText={text => setCategoria(text)}
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
