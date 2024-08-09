import React, {useEffect} from "react"
import {Text, TextInput, View, TouchableOpacity, Pressable, Keyboard, Image, BackHandler} from "react-native"
import styles from "./style"
import { useNavigate } from 'react-router-dom';

export default function Cadastro({navigation}) {

    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])

    const navigate = useNavigate();

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>

            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.tittle}>Cadastro</Text>
                
                <View style={styles.textBox}>
                    <Text style={styles.legend}>Nome do Comércio</Text>
                    <TextInput keyboardType="text" style={styles.input}
                        autoCorrect={false}
                    />
                
                    <Text style={styles.legend}>Email</Text>
                    <TextInput keyboardType="email-addres" style={styles.input} 
                        autoCorrect={false} 
                    />
                
                    <Text style={styles.legend}>CPF</Text>
                    <TextInput keyboardType="numeric" style={styles.input}/>
                
                    <Text style={styles.legend}>Senha</Text>
                    <TextInput keyboardType="visible-password" style={styles.input}
                        autoCorrect={false} secureTextEntry={true}
                    />
                
                    <Text style={styles.legend}>Confirmar senha</Text>
                    <TextInput keyboardType="visible-password" style={styles.input}
                        autoCorrect={false} secureTextEntry={true}
                    />
                    
                </View>
                
                <TouchableOpacity onPress={() => navigate("/Home")} style={styles.buttom}>
                    <Text style={styles.textButtom}>Logar</Text>
                </TouchableOpacity>

                <Text onPress={() => navigation.navigate("#")} style={styles.plus}>Suporte?</Text>
            </Pressable>

            <Image source={require("../../images/feirantes.png")} style={styles.img} resizeMode="contain"/>
        </Pressable>
    )
}