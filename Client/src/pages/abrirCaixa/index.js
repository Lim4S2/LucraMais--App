import React from "react"
import {View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import styles from "./style"

export default function AbrirCaixa({ navigation }) {
    const handleAbrirCaixa = () => {
        const currentTime = new Date(); 

        navigation.navigate('Venda', { openingTime: currentTime });
    };

    return (
        <View style={styles.buttomcaixa}>
            <TouchableOpacity style={styles.buttom} onPress={handleAbrirCaixa}>
                <Text style={styles.textButtom}>Abrir Caixa</Text>
                <Image style={styles.icondol} source={require('../../images/dolar.png')} />
            </TouchableOpacity>
        </View>
    );
}
    
