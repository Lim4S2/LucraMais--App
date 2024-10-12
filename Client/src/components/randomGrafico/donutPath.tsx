import { View } from "react-native"
import React from "react"
import { SharedValue, useDerivedValue, withTiming } from "react-native-reanimated";
import { Path, Skia } from "@shopify/react-native-skia";

type Props = {
    radius: number;
    gap: number;
    strokeWidth: number;
    outerStrokeWidth: number;
    color: string;
    decimals: SharedValue<number[]>;
    index: number
}

const DonutPath = ({
    radius, 
    gap, 
    strokeWidth, 
    outerStrokeWidth,
    color, 
    decimals, 
    index
} : Props) => {

    const innerRadius = radius -outerStrokeWidth / 2

    const path = Skia.Path.Make()
    path.addCircle(radius, radius, innerRadius)

    const start = useDerivedValue(() =>{
        if (index === 0) {
            return gap
        }

        const decimal = decimals.value.slice(0, index)
        const sum = decimal.reduce(
            (accumulator,  currentValue) => accumulator + currentValue, 0
        )

        return withTiming(sum + gap, {duration: 1000})
    }) 

    const end = useDerivedValue(() =>{
        if (index ===  decimals.value.length - 1) {
            return withTiming(1, {duration: 1000})
        }

        const decimal = decimals.value.slice(0, index + 1)
        const sum = decimal.reduce(
            (accumulator,  currentValue) => accumulator + currentValue, 0
        )
        
        return withTiming(sum, {duration: 1000})
    }) 

    return(
        <Path 
            path={path} 
            style="stroke" 
            color={color}
            strokeWidth={strokeWidth}
            strokeJoin="round"
            strokeCap="round"
            start={start}
            end={end}
        />
    )
} 

export default DonutPath