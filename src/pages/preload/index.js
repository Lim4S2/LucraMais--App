import React, { useState } from "react";
import { View, Image, Text, Animated } from "react-native";

import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";
import styles from "./style";

export default function Preload({navigation}) {

    const [carregamento, setCarregamento] = useState( new Animated.Value(0))
    const [terra, setTerra] = useState( new Animated.Value(0))

    Animated.sequence([
        Animated.timing(
            terra, {
                toValue: 370,
                duration: 2000
            }
        ),
        Animated.timing(
            carregamento, {
                toValue: 280,
                duration: 3500
            }
        )
    ]).start()

    return(
        <View style={styles.container}>
            <Image source={require("../../images/logo.png")} style={styles.logo}/>
            
            <Animatable.View style={styles.containerLoading} animation="fadeInLeft">

            <Animated.View style={{ marginLeft: carregamento}}>
                <LottieView source={require("../../components/screenSplash/animation.json")} 
                    style={styles.trator}
                    onAnimationFinish={() => navigation.navigate("Login")}
                    autoPlay loop={false}
                />
            </Animated.View>

                <Animated.Image
                    source={require("../../images/terra.png")} style={{...styles.terra, width: terra}}/>
            </Animatable.View> 

            <Text onPress={() => navigate("Login")}
                style={{
                    padding: 10
                }}
                >Próxima página</Text>
        </View>
    )
}