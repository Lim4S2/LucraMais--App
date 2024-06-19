import React from "react";
import {View, Text} from "react-native"
import styles from "./style"

export default function Grafico() {
    return(
        
        <View>

            <View style={styles.container}>
                <Text style={styles.text}>Gráficos</Text>
            </View>

            <View style={{...styles.container, backgroundColor: "gray"}}>
                <Text style={styles.text}>Gráficos</Text>
            </View>
        </View>
    )
}