import React from "react"
import {View, Text, Button} from "react-native"
import styles from "./style"

export default function Venda({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela de venda</Text>

            <Button onPress={() => navigation.navigate("Fechamento")}>Fechar caixa</Button>
        </View>
    )
}