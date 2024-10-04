import React from "react"
import {View, Text, FlatList, TouchableOpacity, Image} from "react-native"
import styles from "./style"
import stylesList from "./stylesList.js"

export default function Venda({navigation}) {

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
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
                    <Image source={require("../../images/iconCesta.png")}
                        style={{width: 40, height: 40}}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Fechamento")}
                    style={styles.btnFechar}>
                    <Text style={styles.text}>Fechar caixa</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: "center", marginBottom: 20, marginTop: 15}}>
                <Text style={{...styles.text, color: "#545454"}}>Caixa aberto em 
                    <Text style={{color: "white"}}>_</Text>
                    <Text style={{...styles.text, color: "#545454"}}>08:33 - 02/08/2024</Text>
                </Text>
            </View>

            <View>
                <FlatList 
                    data={DATA}
                    contentContainerStyle={{paddingTop: 15, paddingBottom: 20}}
                    renderItem={({item}) => {
                        return(
                            <View>
                            <View style={stylesList.produto}>
                                <View style={stylesList.viewTittle}>
                                <Text style={stylesList.titulo}>{item.tittle}</Text>
                                    <View style={stylesList.viewAddCar}>
                                        <TouchableOpacity style={stylesList.btnMenos}>
                                            <Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>-</Text>
                                        </TouchableOpacity>
                                    
                                        <Text style={{fontSize: 20, fontWeight: "bold"}}>1</Text>

                                        <TouchableOpacity style={{...stylesList.btnMenos, backgroundColor: "#8DEB84"}}>
                                            <Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>+</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <Image source={require("../../images/cesta.png")} 
                                                style={{width: 30, height: 30, marginLeft: 50}}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
        
                                    <View style={stylesList.viewValor}>
                                        <Text style={stylesList.sifrao}>R$
                                            <Text style={{color: "white"}}>_</Text>
                                            <Text style={{...stylesList.sifrao, fontSize: 34}}>{item.preco}</Text>
                                        </Text>
                                    </View>
                            </View>
                        </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}