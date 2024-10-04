import React from "react"
import {View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import styles from "./style"

export default function AbrirCaixa({navigation}) {
    return(
        <View style={styles.container}>
            {/*<View style={styles.header}>
                <Image source={require('../../images/setaesq.png')}
                    style={{width: 30, height: 30, marginLeft: 15}}
                    resizeMode="contain"
                />
                <Text style={styles.setaEsq}> ➱</Text>
                <Text style={styles.titulotext}>Nome do comércio</Text>
            </View>*/}
            
            <View style={styles.buttomcaixa}>
            <TouchableOpacity style={styles.buttom}
                onPress={() => navigation.navigate('Venda')}>
                <Text style={styles.textButtom}>Abrir Caixa</Text>
                <Image style={styles.icondol}
                source={require('../../images/dolar.png')}
                />
            </TouchableOpacity>
            </View>
        </View>
    )
}