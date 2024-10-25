import React, { useState, useEffect, useRef } from "react";
import { Text, TextInput, View, TouchableOpacity, Pressable, Keyboard, Image, BackHandler, Alert } from "react-native";
import { TextInputMask } from "react-native-masked-text"
import { registerUser } from '../cadastro/cadApi'; 
import styles from "./style";

export default function Cadastro({ navigation }) {
    const [comercio, setComercio] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const cpfRef = useRef(null)

    useEffect(() => {
        const backAction = () => {
            return true;
        };

        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    const handleSubmit = async () => {

        // CPF sem formatação
        const unmasked = cpfRef?.current.getRawValue()
        // CPF validação caso quiser colocar
        const cpfValid = cpfRef?.current.isValid()

        if (senha !== confirmarSenha) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        try {
            const result = await registerUser(comercio, email, unmasked, senha);
            Alert.alert("Sucesso", result.message);
            navigation.navigate("Login"); 
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            Alert.alert("Erro", "Não foi possível completar o cadastro.");
        }
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <View style={styles.containerTitle}>
                    <Text style={styles.setaEsq} onPress={() => navigation.navigate("Login")}>➱</Text>
                    <Text style={styles.tittle}>Cadastro</Text>
                </View>

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
                    <TextInputMask
                        type={"cpf"}
                        value={cpf}
                        onChangeText={setCpf}
                        keyboardType="numeric"
                        style={styles.input}
                        ref={cpfRef}
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

            <Image source={require("../../images/imageCadOficial.png")} style={styles.img} resizeMode="contain" />
        </Pressable>
    );
}
