import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style"

export default function Preload({navigation}) {
    return(
        <View style={styles.container}>
            <Image source={require("../../images/logo.png")} style={styles.logo}/>
            <View style={styles.containerLoading}>
                <Image source={require("../../images/trator.png")} style={styles.trator}/>
                <Image source={require("../../images/terra.png")} style={styles.terra}/>
            </View>
            <Text onPress={() => navigation.navigate("Login")}
                style={{
                    padding: 10
                }}
                >Próxima página</Text>
        </View>
    )
}