import React, { useState, useRef } from "react";
import {View, Text, TouchableOpacity, Animated, StatusBar, Pressable, Keyboard, FlatList} from "react-native"
import styles from "./style"
import { FloatingLabelInput } from "react-native-floating-label-input";
import { TextInputMask } from "react-native-masked-text";



export default function Despesas({navigation}) {

    const todasDespesas = [
        {
            id: 1,
            nome: "Transporte",
            valor: 100.00
        },
        {
            id: 2,
            nome: "Alimentação",
            valor: 50.00
        },
        {
            id: 3,
            nome: "Luz",
            valor: 150.00
        },
        {
            id: 4,
            nome: "Água",
            valor: 80.00
        },
        {
            id: 5,
            nome: "Internet",
            valor: 120.00
        },
        {
            id: 6,
            nome:  "Telefone",
            valor: 90.00
        },
        {
            id: 7,
            nome:  "Mensalidade",
            valor: 500.00
        }
    ]

    const [despesa, setDespesa] = useState("")
    const [valorDespesa, setValorDespesa] = useState("")

    const floatingLabelAnimation = useRef(new Animated.Value(valorDespesa ? 1 : 0)).current;

    const handleFocus = () => {
        Animated.timing(floatingLabelAnimation, {
            toValue: 1,
            duration: 350,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        if (!valorDespesa) {
            Animated.timing(floatingLabelAnimation, {
                toValue: 0,
                duration: 350,
                useNativeDriver: false,
            }).start();
        }
    };

    const floatingLabelStyle = {
        top: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0],
        }),
        fontSize: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [14, 14],
        }),
        color: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["#0C1B10", "#6294ac"]
        }),
        backgroundColor: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["white", "#fff"]
        }),
        zIndex:  floatingLabelAnimation.interpolate({ 
            inputRange: [0, 1],
            outputRange: [0, 1]
        })

    };

    
    const [focused, setFocused] = useState(null)

    return(
        <View style={{flex: 1}}>
            <StatusBar backgroundColor={"#6294ac"} barStyle={"light-content"}/>
            <View style={styles.container}>
                <Text style={styles.text}>Despesas do dia</Text>
            </View>

            <Pressable onPress={Keyboard.dismiss} style={styles.page}>
                <Text style={styles.title}>Relate as sus despesas do dia</Text>

                <View style={styles.form}>
                    <View style={styles.view}>
                        <View style={styles.viewInput}>
                            <FloatingLabelInput
                                label="Despesa"
                                value={despesa}
                                containerStyles={styles.input}
                                customLabelStyles={{
                                    colorFocused: "#6294ac",
                                    fontSizeFocused: 14,
                                    colorBlurred: "#0C1B10",
                                }}
                                labelStyles={{
                                    backgroundColor: "white",
                                    padding: 5,
                                    borderRadius: 50
                                }}
                                onChangeText={text => setDespesa(text)}
                                onPress={() => setFocused(1)}
                            />

                            <View style={{ width: "35%" }}>
                                <Animated.Text style={[styles.label, floatingLabelStyle]}>Valor</Animated.Text>
                                    <TextInputMask
                                        style={styles.input}
                                        type={'money'}
                                        options={{
                                            precision: 2,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: 'R$ ',
                                            suffixUnit: ''
                                        }}
                                        onBlur={handleBlur}
                                        onFocus={handleFocus}
                                        value={valorDespesa}
                                        onChangeText={text => setValorDespesa(text)}
                                        onPress={() =>  setFocused(2)}

                                    />
                            </View>
                        </View>

                        <TouchableOpacity style={{position: "absolute", bottom: "-10%", right: "10%"}}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.viewList}>
                        <FlatList
                            data={todasDespesas}
                            contentContainerStyle={{marginVertical: 20}}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.itemDespesa}>
                                    <Text style={styles.itemText}>{item.nome}</Text>
                                    <Text style={styles.sifrao}>R$
                                        <Text style={styles.itemText}> {item.valor}</Text> 
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                
                </View>

                <TouchableOpacity style={styles.btnProx} onPress={() => navigation.navigate("Fechamento")}>
                    <Text style={styles.textBtn}>Fechar dia</Text>
                </TouchableOpacity>
        
                
            </Pressable>
        </View>
    )
}