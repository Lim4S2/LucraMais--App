import React from "react";
import {View, Text, Touchable } from "react-native"
import styles from "./style"

export default function Estoque({navigation}) {
    return(
        <View style={styles.container}> 
            <Text style={styles.text}
             onPress={() => navigation.navigate('Produto')}>Tela de estoque</Text>
        </View>
    )
}