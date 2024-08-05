import React from "react"
import {View, Text, Button, TouchableOpacity} from "react-native"
import styles from "./style"
import { useNavigate } from "react-router-dom";


export default function Venda({navigation}) {

    const navigate = useNavigate();

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela de venda</Text>

        <TouchableOpacity onPress={() => navigate("/Fechamento")} style={styles.buttom}>
            <Text style={styles.text}>Fechar Caixa</Text>
        </TouchableOpacity>

        </View>

    )
}