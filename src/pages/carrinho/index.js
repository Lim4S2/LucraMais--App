import React from "react"
import { View, FlatList, Text, TouchableOpacity} from "react-native"
import styles from "./style"

export default function Carrinho({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Cesta de venda</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Venda")}
                style={{
                    backgroundColor: "white",
                    width: "50%",
                    alignItems: "center"
                }}
                >
                <Text>Vender</Text>
            </TouchableOpacity>
        </View>
    )
}