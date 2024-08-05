import React from "react"
import {View, Text, Button} from "react-native"
import styles from "./style"
import { useNavigate } from "react-router-dom"

export default function Fechamento({navigation}) {

    const navigate = useNavigate();

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela de fechamento</Text>
            <Button title="Voltar para a tela Inicial" onPress={() => navigate("/Home")}/>
        </View>
    )
}