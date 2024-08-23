import React from "react";
import {View, Image} from "react-native"
import styles from "./style"

export default function Images() {
    return(
        <View>
            <View style={styles.containerLogo}>
                <Image source={require("../../images/logo.png")}/>
            </View>

            <View style={styles.containerLoading}>            
                <Image style={styles.trator}
                source={require("../../images/trator.png")}/>
            
                <Image style={styles.terra} 
                source={require("../../images/terra.png")}/>
            </View>
        </View>
    )
}