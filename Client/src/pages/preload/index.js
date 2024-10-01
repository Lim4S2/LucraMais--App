
import React, { useState } from "react";
import { View, Image, Text, Animated, StatusBar } from "react-native";

import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";
import styles from "./style";

export default function Preload({navigation}) {

    const [carregamento, setCarregamento] = useState( new Animated.Value(0))
    const [terra, setTerra] = useState( new Animated.Value(0))

    /*Animated.sequence([
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
    ]).start()*/

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={"#04414b"} barStyle={"light-content"}/>
            <Image source={require("../../images/logo.png")} style={styles.logo}/>

            <View style={styles.carregamento}>
                <LottieView source={require("../../components/screenSplash/animation.json")} 
                    style={styles.trator}
                    onAnimationFinish={() => navigation.navigate("Login")}
                    autoPlay loop={false}
                />
            </View>

                {/*<Animated.Image
                    source={require("../../images/terra.png")} style={{...styles.terra, width: terra}}/>
            </Animatable.View> */}

            <Text onPress={() => navigation.navigate("Login")}
                style={{
                    padding: 10
                }}
            >Próxima página</Text>
        </View>
    )
}
