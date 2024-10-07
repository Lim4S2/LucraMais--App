import { View, Text, useWindowDimensions, StyleSheet } from "react-native"
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
        <View style={[styles.container, {width: width * 0.9}]}>
            <View style={styles.contentContainer}>
                <View style={[styles.color, {backgroundColor: item.color}]}/>
                <Text>Render Item</Text>
            </View>
        </View>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#acc4cc",
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 20
    },
    contentContainer: {
        flex: 1
    },
    color: {
        width: 60,
        height: 60,
        borderRadius: 10
    }
})