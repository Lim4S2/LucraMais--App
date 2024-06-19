import React, {useEffect} from "react"
import {Text, Image, TextInput, View, TouchableOpacity, Pressable, Keyboard, BackHandler} from "react-native"
import styles from './style'

export default function Login({navigation}) {

    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            
            <Image source={require("../../images/logo.png")} style={styles.logo}/>

            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.tittle}>Login</Text>
                <Text style={styles.text}>É bom ver você novamente👏</Text>
                
                <View style={styles.textBox}>
                    <Text style={styles.legend}>E-mail</Text>
                    <TextInput  style={styles.input}
                    keyboardType="email-address"
                    keyboard="#6B983C"
                    autoCorrect={false}
                    blurOnSubmit="true"
                    />
                
                    <Text style={styles.legend}>Senha</Text>
                    <TextInput style={styles.input}
                    keyboardType="text"
                    secureTextEntry={true}
                    autoCorrect={false}
                    />
                </View>
                
                <View style={styles.senhaCad}>
                    <Text style={styles.plus}>Esqueceu sua senha?</Text>
                    {/*cria uma função para pode passar de página*/}
                    <Text style={styles.plus}>|</Text>
                    <Text style={styles.cad} 
                    onPress={() => navigation.navigate("Cadastro")}
                    >Cadastrar</Text>
                </View>

                <TouchableOpacity style={styles.buttom}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textButtom}>Logar</Text>
                </TouchableOpacity>

                <Text style={styles.plus}>Suporte ?</Text>
            </Pressable>
        </Pressable>
    )
}