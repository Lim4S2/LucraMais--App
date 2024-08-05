import React from "react"
import {View, Text, Button, TouchableOpacity} from "react-native"
import styles from "./style"
import { useNavigate } from "react-router-dom";


export default function Venda({navigation}) {

    const navigate = useNavigate();

    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate("/Fechamento")} style={styles.buttom}>
            <Text style={styles.text}>Venda</Text>
        </TouchableOpacity>

        </View>

    )
}