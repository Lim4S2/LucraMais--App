import { View, StyleSheet } from "react-native"
import React from "react"
import { SharedValue, useDerivedValue } from "react-native-reanimated";
import { Canvas, Path, SkFont, Skia, Text } from "@shopify/react-native-skia"
import DonutPath from "./donutPath";


// É neste arquivo que fica o gráfico e suas propriedades
type Props = {
    totalValue: SharedValue<number>;
    decimals: SharedValue<number[]>;
    outerStrokeWidth: number;
    strokeWidth: number;
    smallFont: SkFont;
    colors: string[];
    radius: number;
    font: SkFont;
    gap: number;
    n: number;
}

const DonutChart = ({
    outerStrokeWidth, 
    strokeWidth, 
    totalValue, 
    smallFont,
    decimals,
    radius, 
    colors,
    font, 
    gap,
    n
} : Props) => {

    // aqui vai pegar os dados conforme a quantidade disponível
    const array = Array.from({length: n})
    
    // tamanho do gráfico
    const innerRadius = radius - outerStrokeWidth / 2
    const path = Skia.Path.Make()
    path.addCircle(radius, radius, innerRadius)

    // fazendo aparecer o texto no centro do gráfico
    const targetText = useDerivedValue(
        () => `${Math.round(totalValue.value)}`,
        [],
    )

    const fontSize = font.measureText("$00");
    const smallFontSize = smallFont.measureText("Produtos vendidos")

    const targX = useDerivedValue(() => {
        const _fontSize = font.measureText(targetText.value)
        return radius - _fontSize.width / 2
    })
    
    return(
        <View>
            <Canvas style={styles.container}>
                <Path path={path} 
                    color="white"
                    style="stroke"
                    strokeWidth={outerStrokeWidth}
                    strokeJoin="round"
                    strokeCap="round"
                    start={0}
                    end={1}
                />

                {/* É nesta parte onde os dados vão aparecer */}
                {array.map((_, index) => {
                    return(
                    <DonutPath 
                        key={index} 
                        radius={radius} 
                        strokeWidth={strokeWidth}
                        outerStrokeWidth={outerStrokeWidth}
                        color={colors[index]}
                        decimals={decimals}
                        index={index}
                        gap={gap}
                    />
                    )  
                })}

                <Text
                    x={radius - smallFontSize.width / 2}
                    y={radius + smallFontSize.height / 2 - fontSize.height / 1.6}
                    text={"Produtos vendidos"}
                    font={smallFont}
                    color="#545454"
                />

                <Text
                    x={targX}
                    y={radius + fontSize.height / 2 + 5}
                    text={targetText}
                    font={font}
                    color="black"
                />
            </Canvas>
        </View>
    )
}

export default DonutChart

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})