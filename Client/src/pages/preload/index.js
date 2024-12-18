import React, { useEffect } from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import styles from "./style";

export default function Preload({ navigation }) {
    useEffect(() => {
        // Temporizador para navegação após 2 segundos
        const timer = setTimeout(() => {
            navigation.navigate("Login"); // Navega para a tela de Login após 2 segundos
        }, 2000);

        return () => clearTimeout(timer); // Limpa o timer quando o componente desmonta
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require("../../images/logo.png")} style={styles.logo} />

            <View style={styles.carregamento}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>

        </View>
    );
}
