import React from "react";
import { View, Image, StatusBar, Text } from "react-native";
import LottieView from "lottie-react-native"
import styles from "./style";

export default function Preload({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#04414b"} barStyle="light-content"/>
            <Image source={require("../../images/logo.png")} style={styles.logo} />

            <LottieView
                source={require("../../images/animacaoOficial.json")}
                autoPlay={true}
                onAnimationFinish={() => navigation.navigate("Login")}
                style={{width: 120, height: 120}}
                loop={false}
            />

        </View>
    );
}
