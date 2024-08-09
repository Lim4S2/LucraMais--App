import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, Pressable, Keyboard, Image, BackHandler, Alert } from "react-native";
import { registerUser } from '../cadastro/cadApi'; // Certifique-se de que o caminho está correto
import styles from "./style";

export default function Cadastro({ navigation }) {
    const [comercio, setComercio] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    // Função para não permitir que o usuário volte para a página anterior
    useEffect(() => {
        const backAction = () => {
            return true;
        };

        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    // Função para manipular o envio do formulário
    const handleSubmit = async () => {
        if (senha !== confirmarSenha) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        try {
            const result = await registerUser(comercio, email, cpf, senha);
            Alert.alert("Sucesso", result.message);
            navigation.navigate("Login"); // Navega para a tela de login após o cadastro
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            Alert.alert("Erro", "Não foi possível completar o cadastro.");
        }
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.tittle}>Cadastro</Text>

                <View style={styles.textBox}>
                    <Text style={styles.legend}>Nome do Comércio</Text>
                    <TextInput
                        value={comercio}
                        onChangeText={setComercio}
                        keyboardType="default"
                        style={styles.input}
                        autoCorrect={false}
                    />

                    <Text style={styles.legend}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.input}
                        autoCorrect={false}
                    />

                    <Text style={styles.legend}>CPF</Text>
                    <TextInput
                        value={cpf}
                        onChangeText={setCpf}
                        keyboardType="numeric"
                        style={styles.input}
                    />

                    <Text style={styles.legend}>Senha</Text>
                    <TextInput
                        value={senha}
                        onChangeText={setSenha}
                        keyboardType="default"
                        style={styles.input}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />

                    <Text style={styles.legend}>Confirmar senha</Text>
                    <TextInput
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        keyboardType="default"
                        style={styles.input}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity onPress={handleSubmit} style={styles.buttom}>
                    <Text style={styles.textButtom}>Cadastrar</Text>
                </TouchableOpacity>

                <Text onPress={() => navigation.navigate("Suporte")} style={styles.plus}>Suporte?</Text>
            </Pressable>

            <Image source={require("../../images/feirantes.png")} style={styles.img} resizeMode="contain" />
        </Pressable>
    );
}
