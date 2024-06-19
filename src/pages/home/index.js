import React, {useEffect} from "react";
import {View, Text, BackHandler} from "react-native";
import styles from "./style"

export default function Home({navigation}) {

    //função para que o usuário não volte para a página
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            return true
        })
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela inicial</Text>
        </View>
    )
}