import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./style"

export default function Fechamento({ navigation }) {
    return (
        <View style={{alignItems: "center"}}>
            <View style={styles.container}>
                <Image source={require("../../images/iconFechaCaixa.png")}
                style={{ width: 40, height: 40, marginRight: 20 }}/>
                <Text style={styles.text}>Fechamento do dia</Text>
            </View>

                <Text style={{fontSize: 18, marginTop: 20}}>Caixa aberto - 
                    <Text>_</Text>
                    <Text style={{fontSize: 18,marginTop: 10}}>08:33</Text>
                </Text>
                <Text style={{fontSize: 18,marginTop: 10}}>Fechou caixa - 
                    <Text>_</Text>
                    <Text style={{fontSize: 18,marginTop: 10}}>11:40</Text>
                </Text>
                <Text style={{fontSize: 18,marginTop: 10}}>Horas trabalhadas - 
                    <Text>_</Text>
                    <Text style={{fontSize: 18,marginTop: 10}}>03:07</Text>
                </Text>

            <View style={styles.viewLucro}>
                <Text style={{...styles.text, fontSize: 20}}>Lucro do dia</Text>
                <Text style={{...styles.text, fontSize: 28, color: "green"}}>R$
                    <Text style={{color: "white"}}>_</Text>
                    <Text style={{...styles.text, fontSize: 40, color: "green"}}>3.570,00</Text>
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