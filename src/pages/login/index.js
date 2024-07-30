import React, {useEffect, useState} from "react"
import {Text, Image, TextInput, View, TouchableOpacity, Pressable, Keyboard, BackHandler} from "react-native"
import styles from './style'

export default function Login({navigation}) {

    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])

    const [emailLogin, setEmailLogin] = useState("")
    const [senhaLogin, setSenhaLogin] = useState("")

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            
            <Image source={require("../../images/logo.png")} style={styles.logo}/>

            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.tittle}>Login</Text>
                <Text style={styles.text}>É bom ver você novamente👏</Text>
                
                <View style={styles.textBox}>
                    <Text style={styles.legend}>E-mail</Text>
                    <TextInput  style={styles.input}
                    onChangeText={(val) => setEmailLogin(val)}
                    keyboardType="email-address"
                    keyboard="#6B983C"
                    autoCorrect={false}
                    blurOnSubmit="true"
                    />
                
                    <Text style={styles.legend}>Senha</Text>
                    <TextInput style={styles.input}
                    onChangeText={(val) => setSenhaLogin(val)}
                    keyboardType="text"
                    secureTextEntry={true}
                    autoCorrect={false}
                    />
                </View>
                
                <View style={styles.senhaCad}>
                    <Text style={{...styles.plus, padding: 7}}>Esqueceu sua senha?</Text>
                    <Text style={{...styles.plus, paddingTop: 5}}>|</Text>
                    <Text style={styles.cad} 
                    /*cria uma função para pode passar de página*/
                    onPress={() => navigation.navigate("Cadastro")}
                    >Cadastrar</Text>
                </View>

                <View style={styles.senhaCad}>
                    <Text>Email {emailLogin}</Text>
                    <Text>Senha {senhaLogin}</Text>
                </View>

                <TouchableOpacity style={styles.buttom}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textButtom}>Logar</Text>
                </TouchableOpacity>

                <Text style={{...styles.plus, padding: 7}}>Suporte ?</Text>
            </Pressable>
        </Pressable>
    )
}