import React from "react"
import {View, Text, Button} from "react-native"
import styles from "./style"

export default function Fechamento({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela de fechamento</Text>
            <Button title="Voltar para a tela Inicial" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}