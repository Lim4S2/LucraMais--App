import { View, Text, useWindowDimensions } from "react-native"
import React from "react"

interface Data {
    value: number;
    percentage: number;
    color: string;
}

type Props = {
    item: Data;
    index: number;
}

const RenderItem = (item, index: Props) => {

    const {width} = useWindowDimensions()
    
    return(
        <View>
            <Text>Render Item</Text>
        </View>
    )
}

export default RenderItem