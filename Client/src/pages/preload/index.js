import React, { useEffect } from "react";
import { View, Image, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./style";

export default function Preload({ navigation }) {
    useEffect(() => {
        const checkToken = async () => {
            setTimeout(async () => {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    navigation.navigate("Home");
                } else {
                    navigation.navigate("Login");
                }
            }, 5000); 
        };

        checkToken();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#04414b"} barStyle="light-content"/>
            <Image source={require("../../images/logo.png")} style={styles.logo} />
            <LottieView
                source={require("../../images/animacaoOficial.json")}
                autoPlay={true}
                style={{width: 120, height: 120}}
                loop={false}
            />
        </View>
    );
}