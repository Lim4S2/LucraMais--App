import React from "react";
import {View, Text, TouchableOpacity, TextInput, Keyboard } from "react-native"
import styles from "./style"
import { getBorderColorAsync } from "expo-navigation-bar";

export default function Estoque({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <View style={styles.containerTitle}>
                    <Text style={styles.titleText}>Estoque</Text>
                </View>

                <TouchableOpacity style={{...styles.buttonCadPro, width: 45, height: 45}}
                    onPress={() =>navigation.navigate("Produto")}>
                    <Text style={{...styles.textCadProd, fontSize: 30 }}>+</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <TextInput style={styles.input}
                    placeholderTextColor={"#808080"}
                    placeholder="Pesquisar" 
                    keyboardType="text"
                    //inlineImageRight='../drawable/seach.png'
                    //inlineImagePadding={10}
                />

                <View style={{flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 15}}>
                    <Text>X produto cadastrados</Text>
                    <Text>Filtro ▽</Text>
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={{...styles.buttonCadPro, backgroundColor: "gray"}}
                    onPress={() =>navigation.navigate("AtualizarProd")}>
                    <Text style={{...styles.textCadProd}}>🖊</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.buttonCadPro, backgroundColor: "red"}}
                    onPress={() =>navigation.navigate("Home")}>
                    <Text style={{...styles.textCadProd}}>🗑</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}