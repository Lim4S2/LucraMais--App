import React, { useEffect } from "react";
import { View, Image, ActivityIndicator, StatusBar, Text } from "react-native";
import LottieView from "lottie-react-native"
import styles from "./style";

export default function Preload({ navigation }) {
    /*useEffect(() => {
        // Temporizador para navegação após 2 segundos
        const timer = setTimeout(() => {
            navigation.navigate("Login"); // Navega para a tela de Login após 2 segundos
        }, 20000);

        return () => clearTimeout(timer); // Limpa o timer quando o componente desmonta
    }, [navigation]);*/

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#04414b"} barStyle="light-content"/>
            <Image source={require("../../images/logo.png")} style={styles.logo} />

            {/*<View style={styles.carregamento}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>*/}

            <LottieView
                source={require("../../images/animacaoCaminhao.json")}
                autoPlay={true}
                onAnimationFinish={() => navigation.navigate("Login")}
                style={{width: 120, height: 120}}
                loop={false}
            />
        </View>
    );
}
