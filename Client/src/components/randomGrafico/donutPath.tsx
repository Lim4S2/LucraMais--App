import { View, Text } from "react-native"
import React from "react"
import { SharedValue } from "react-native-reanimated";

type Props = {
    radius: number;
    gap: number;
    strokeWidth: number;
    color: string;
    decimals: SharedValue<number[]>;
    index: number
}

const DonutPath = ({radius, gap, strokeWidth, color, decimals, index} : Props) => {
    return(
        <View>
            <Text>Donut path</Text>
        </View>
    )
} 

export default DonutPath