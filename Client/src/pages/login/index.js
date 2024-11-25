import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, Pressable, Keyboard, Image, BackHandler, Alert, StatusBar } from "react-native";
import { loginUser } from '../login/logApi'; 
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
            await AsyncStorage.setItem('token', result.token);
            await AsyncStorage.setItem('nome_comercio', result.nome_comercio);
            navigation.navigate("Home"); 
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            Alert.alert("Erro", "Não foi possível realizar o login. Verifique suas credenciais e tente novamente.");
        }
    };

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <StatusBar backgroundColor={"#04414b"} barStyle={"light-content"}/>
           
            <Image source={require("../../images/logo.png")} style={styles.logo}/>

            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.tittle}>Login</Text>
                <Text style={styles.text}>É bom ver você novamente👏</Text>
                
                <View style={styles.textBox}>
                    <Text style={styles.legend}>E-mail</Text>
                    <TextInput  style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        keyboard="#6B983C"
                        autoCorrect={false}
                        blurOnSubmit="true"
                    />
                
                    <Text style={styles.legend}>Senha</Text>
                    <TextInput style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                        keyboardType="text"
                        secureTextEntry={true}
                        autoCorrect={false}
                    />
                </View>
                
                <View style={styles.senhaCad}>
                    <Text style={styles.plus}>Esqueceu sua senha?</Text>
                    <Text style={styles.plus}>|</Text>
                    <Text style={styles.cad} 
                        onPress={() => navigation.navigate("Cadastro")}
                    >Cadastrar</Text>
                </View>

                <TouchableOpacity onPress={handleSubmit} style={styles.buttom}>
                    <Text style={styles.textButtom}>Logar</Text>
                </TouchableOpacity>

                <Text onPress={() => navigation.navigate("Home")} style={{...styles.plus, marginBottom: "2%"}}>Suporte?</Text>
            </Pressable>
        </Pressable>
    );
}
