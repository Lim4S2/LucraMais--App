import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./style"

export default function Fechamento({ navigation }) {
    return (
        <View style={{alignItems: "center"}}>
            <View style={styles.container}>
                <Text style={styles.text}>Fechamento do dia</Text>
            </View>

            <View style={styles.viewHora}>
                <Text>Caixa aberto - 
                    <Text>_</Text>
                    <Text>08:33</Text>
                </Text>
                <Text>Fechou caixa - 
                    <Text>_</Text>
                    <Text>11:40</Text>
                </Text>
                <Text>Horas trabalhadas - 
                    <Text>_</Text>
                    <Text>03:07</Text>
                </Text>
            </View>

            <View style={styles.viewLucro}>
                <Text style={{...styles.text, fontSize: 22}}>Lucro do dia</Text>
                <Text>R$
                    <Text>3.570,00</Text>
                </Text>
            </View>


            <View style={styles.viewDetalhamento}>
                <Text style={styles.textDetalhe}>Receita do dia</Text>
                <Text style={styles.textDetalhe}>4.693,50</Text>
            </View>
            
            <View style={styles.viewDetalhamento}>
                <Text style={styles.textDetalhe}>Despesas</Text>
                <Text style={styles.textDetalhe}>1.123,50</Text>
            </View>
            
            <View style={styles.viewDetalhamento}>
                <Text style={styles.textDetalhe}>Qnt. de vendas</Text>
                <Text style={styles.textDetalhe}>145</Text>
            </View>

            <Text style={{...styles.text, fontSize: 22, marginBottom: 10}}>Formas de Pagamento</Text>
            
            <View style={{...styles.viewDetalhamento, width: "70%"}}>
                <View style={{flexDirection: "row"}}>
                    <Image style={styles.img} 
                    source={require("../../images/iconDinheiro.png")} />
                    <Text style={styles.textDetalhe}>Dinheiro</Text>
                </View>
                <Text style={styles.textDetalhe}>67</Text>
            </View>
            
            <View style={{...styles.viewDetalhamento, width: "70%"}}>
                <View style={{flexDirection: "row"}}>
                    <Image style={styles.img} 
                    source={require("../../images/iconPix.png")}/>
                    <Text style={styles.textDetalhe}>PIX</Text>
                </View>
                    
                <Text style={styles.textDetalhe}>50</Text>
            </View>
            
            <View style={{...styles.viewDetalhamento, width: "70%"}}>
                <View style={{flexDirection: "row"}}>
                    <Image style={styles.img}
                    source={require("../../images/iconCartão.png")}/>
                    <Text style={styles.textDetalhe}>Cartão</Text>
                </View>
                <Text style={styles.textDetalhe}>28</Text>
            </View>
            
           <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={{...styles.text, color: "white", fontSize: 20}}>Voltar para a tela inicial</Text>
           </TouchableOpacity>
        </View>
    )
}