import React, {useEffect} from "react"
import {Text, Image, TextInput, View, TouchableOpacity, Pressable, Keyboard, BackHandler} from "react-native"
import styles from './style'
import { useNavigate } from 'react-router-dom';

export default function Login({navigation}) {

    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])

    const navigate = useNavigate();

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
                    <Text style={{...styles.plus, padding: 7}}>Esqueceu sua senha?</Text>
                    {/*cria uma função para pode passar de página*/}
                    <Text style={{...styles.plus, paddingTop: 5}}>|</Text>
                    <Text style={styles.cad} 
                    onPress={() => navigate("/Cadastro")}
                    >Cadastrar</Text>
                </View>

                <TouchableOpacity onPress={() => navigate("/Home")} style={styles.buttom}>
                    <Text style={styles.textButtom}>Logar</Text>
                </TouchableOpacity>


                <Text style={{...styles.plus, padding: 7}}>Suporte ?</Text>
            </Pressable>
        </Pressable>
    )
}