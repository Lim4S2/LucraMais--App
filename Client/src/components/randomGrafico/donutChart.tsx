import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { SharedValue } from "react-native-reanimated";
import { Canvas, Path, Skia } from "@shopify/react-native-skia"

type Props = {
    radius: number;
    strokeWidth: number;
    outerStrokeWidth: number;
    totalValue: SharedValue<number>;
}

const DonutChart = ({radius, strokeWidth, outerStrokeWidth, totalValue} : Props) => {
    
    const innerRadius = radius - outerStrokeWidth / 2
    const path = Skia.Path.Make()
    path.addCircle(radius, radius, innerRadius)
    
    return(
        <View>
            <Canvas>
                <Path path={path} 
                    color="#acc4cc"
                    style="stroke"
                    strokeWidth={outerStrokeWidth}
                    strokeJoin="round"
                    strokeCap="round"
                    start={0}
                    end={1}
                />
            </Canvas>
        </View>
    )
}

export default DonutChart

const styles = StyleSheet.create({})