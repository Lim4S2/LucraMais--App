import React from "react"
import {View, Text, Button} from "react-native"
import styles from "./style"

export default function AtualizarProd({navigation}) {
    return(
        <View style={styles.container}>
           <View style={styles.header}>
                <Text style={styles.setaEsq} onPress={() => navigation.navigate("Estoque")}>➱</Text>
                <Text style={styles.titleText}>Atualizar Produto</Text>
            </View>
        </View>
    )
}