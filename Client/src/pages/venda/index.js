import React from "react"
import {View, Text, Button, TouchableOpacity} from "react-native"
import styles from "./style"


export default function Venda({navigation}) {

    const navigate = useNavigate();

    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Fechamento")} style={styles.buttom}>
            <Text style={styles.text}>Venda</Text>
        </TouchableOpacity>

        </View>

    )
}