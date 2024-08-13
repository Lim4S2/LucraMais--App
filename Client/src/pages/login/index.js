import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, Pressable, Keyboard, Image, BackHandler, Alert } from "react-native";
import { loginUser } from '../login/logApi'; 
import styles from "./style";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const backAction = () => {
            return true; 
        };

        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    const handleSubmit = async () => {
        try {
            const result = await loginUser(email, senha);
            Alert.alert("Sucesso", "Login realizado com sucesso!");
            navigation.navigate("Home"); 
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            Alert.alert("Erro", "Não foi possível realizar o login. Verifique suas credenciais e tente novamente.");
        }
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.tittle}>Login</Text>
                <Text style={styles.text}>É bom ver você novamente👏</Text>

                <View style={styles.textBox}>
                    <Text style={styles.legend}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.input}
                        autoCorrect={false}
                    />

                    <Text style={styles.legend}>Senha</Text>
                    <TextInput
                        value={senha}
                        onChangeText={setSenha}
                        style={styles.input}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.senhaCad}>
                    <Text style={{ ...styles.plus, padding: 7 }}>Esqueceu sua senha?</Text>
                    <Text style={{ ...styles.plus, paddingTop: 5 }}>|</Text>
                    <Text style={styles.cad} 
                        onPress={() => navigation.navigate("Cadastro")}>
                        Cadastrar
                    </Text>
                </View>

                <TouchableOpacity onPress={handleSubmit} style={styles.buttom}>
                    <Text style={styles.textButtom}>Logar</Text>
                </TouchableOpacity>

                <Text onPress={() => navigation.navigate("Suporte")} style={styles.plus}>Suporte?</Text>
            </Pressable>

            <Image source={require("../../images/feirantes.png")} style={styles.img} resizeMode="contain" />
        </Pressable>
    );
}
