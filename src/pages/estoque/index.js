import React from "react";
import {View, Text, TouchableOpacity, TextInput, Keyboard, Image, FlatList } from "react-native"
import styles from "./style"
import stylesList from "./styleList"
//import { getBorderColorAsync } from "expo-navigation-bar";

export default function Estoque({navigation}) {

    const DATA = [
        {
            tittle: "Coxinha",
            descricao: "Coxinha de frango com catupiry",
            quantidade: 20,
            categoria: "Salgado assado",
            preco: 3.50
        },
        {
            tittle: "Suco de laranjna",
            descricao: "Suco de laranja natural - 500ml",
            quantidade: 5,
            categoria: "Babida",
            preco: 5.00
        },
        {
            tittle: "Batata",
            descricao: "Batata sem produtos químicos",
            quantidade: 1,
            categoria: "Legume",
            preco: 8.00

        },
        {
            tittle: "Pastel de Carne",
            descricao: "",
            quantidade: 0,
            categoria: "Pastel salgado",
            preco: 6.00
        },
        {
            tittle: "Caldo de cana",
            descricao: "Sabor abacaxi ou limão - 400ml",
            quantidade: 10,
            categoria: "Bebida",
            preco: 5.50
        }

    ]



    return(
        <View style={styles.container}>
            <View style={styles.header}> 

                <View style={{flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 15, marginBottom: 20}}
                    accessible={true} accessibilityRole="checkbox">
                    <Text>X produto cadastrados</Text>
                    <Text>Filtro ▽</Text>
                </View>
            </View>

            <View style={{height: "66%"}}>
            <FlatList style={stylesList.list}
                contentContainerStyle={{marginTop: 20}}
                data={DATA}
                viewPosition={0.5}
                renderItem={({item}) => {
                    return(
                    <View style={stylesList.produto}>
                        <View style={stylesList.viewText}>
                            <Text style={stylesList.titulo}>{item.tittle}</Text>
                            <Text style={stylesList.descricao}>{item.descricao}</Text>

                            <View style={stylesList.viewQuant}>
                                <Text style={stylesList.quant}>{item.quantidade}</Text>
                                <Text style={{...stylesList.quant}}>|</Text>
                                <Text style={{...stylesList.quant, color:"#578445"}}>{item.categoria}</Text>
                            </View>
                        </View>

                        <View style={stylesList.mais}>
                            <View style={stylesList.valor}>
                                <Text style={stylesList.sifrao}>R$
                                    <Text style={{color: "white"}}>0</Text>
                                    <Text style={{...stylesList.sifrao, fontSize: 34}}>{item.preco}</Text>
                                </Text>
                            </View>

                            <View style={stylesList.viewButtons}>
                                <TouchableOpacity style={{...styles.buttonCadPro, backgroundColor: "#8DEB84"}}
                                    onPress={() =>navigation.navigate("AtualizarProd")}>
                                    <Text style={{...stylesList.textCadProd}}>🖊</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{...styles.buttonCadPro, backgroundColor: "#FF5757"}}
                                    onPress={() =>navigation.navigate("Home")}>
                                    <Text style={{...stylesList.textCadProd}}>🗑</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    )
                }
            }/> 
            </View>
            <FlatList>            
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
            </FlatList>
        </View>
    )
}