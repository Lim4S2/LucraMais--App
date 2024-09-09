import React, { useRef, useState } from "react"
import { Pressable, Text, View, TextInput, TouchableOpacity, Keyboard, Animated } from "react-native"
import { FloatingLabelInput } from "react-native-floating-label-input"
import { TextInputMask } from "react-native-masked-text"
import { SelectCountry } from "react-native-element-dropdown"
import styles from "./style"

export default function Produto({navigation}) {


    const escolha =[
        {
            value: '1',
            lable: 'Unitário'
        },
        {
            value: '2',
            lable: 'Quilo'
        },
        {
            value: '3',
            lable: 'Litro'
        },
        {
            value: '4',
            lable: 'Caixa'
        },
        {
            value: '5',
            lable: 'Outro'
        },   
    ]
    const [country, setCountry] = useState('0')


    const [nomeProd, setNomeProd] = useState("")
    const [descricao, setDescricao] = useState("")
    const [quant, setQuant] = useState("")
    const [preco, setPreco] = useState("")
    const [categoria, setCategoria] = useState("")

    // Texto sem formatação
    const moneyRef = useRef(null)
    function showMoney() {
        const unMasked = moneyRef?.current.getRawValue()
        alert(unMasked)
    }

    const floatingLabelAnimation = useRef( new Animated.Value(preco ? 1 : 0),).current
    
    const handleFocus = () => {
        Animated.timing(floatingLabelAnimation, {
            toValue: 1,
            duration: 350,
            useNativerDriver: false,
        }).start()
    }

    const handleBlur = () => {
        if(!preco) {
            Animated.timing(floatingLabelAnimation, {
                toValue: 0,
                duration: 350,
                useNativerDriver: false,
            }).start()
        }
    }

    const floatingLabelStyle = {
        top: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 0], // top value
        }),
        fontSize: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 14], // font size
        }),
        backgroundColor: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["#FFF", "#FFF"]
        }),
        zIndex: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        }),
        color: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["#0C1B10", "#60c237"]
        })
    };

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.setaEsq} onPress={() => navigation.navigate("Estoque")}>➱</Text>
                <Text style={styles.titleText}>Cadastro de produto</Text>
            </View>
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <View style={styles.textBox}>

                    <FloatingLabelInput
                        label="Nome do produto"
                        value={nomeProd}
                        hintTextColor="#0C1B10"
                        containerStyles={{
                            width: "50%",
                            height: 44,
                            paddingLeft: 12,
                            paddingRight: 12,
                            marginTop: 10,
                            marginBottom: 10,
                            borderRadius: 50,
                            borderColor: "#79F146",
                            //para ter cor na borda tem que ter uma altura
                            borderWidth: 2
                        }}
                        customLabelStyles={{
                            colorFocused: "#60c237",
                            fontSizeFocused: 14,
                            colorBlurred: "#0C1B10",
                        }}
                        labelStyles={{
                            backgroundColor: "#fff",
                            paddingHorizontal: 5,
                            paddingBottom: 8
                        }}
                        keyboardType="text" 
                        cursorColor={"#79F146"} 
                        onChange={text => setNomeProd(text)}
                   />
            
            
                    <FloatingLabelInput
                        label="Descrição" 
                        value={descricao}
                        hintTextColor={"#0C1B10"} 
                        containerStyles={styles.input}
                        customLabelStyles={{
                            colorFocused: "#60c237",
                            fontSizeFocused: 14,
                            colorBlurred: "#0C1B10",
                        }}
                        labelStyles={{
                            backgroundColor: "#fff",
                            paddingHorizontal: 5,
                            paddingBottom: 8
                        }}
                        keyboardType="text"
                        cursorColor={"#79F146"}
                        onChange={text => setDescricao(text)}
                    />
                    
                    <FloatingLabelInput
                        label="Quantidade"
                        value={quant}
                        hintTextColor={"#0C1B10"} 
                        containerStyles={styles.input}
                        customLabelStyles={{
                            colorFocused: "#60c237",
                            fontSizeFocused: 14,
                            colorBlurred: "#0C1B10",
                        }}
                        labelStyles={{
                            backgroundColor: "#fff",
                            paddingHorizontal: 5,
                            //paddingBottom: 8
                        }}
                        keyboardType="numeric"
                        cursorColor={"#79F146"} 
                        onChange={text => setQuant(text)}
                    />
            
                    <View style={styles.viewPreTip}>
                    <View style={{width: "50%"}}>
                        <Animated.Text style={[styles.label, floatingLabelStyle]}>Preço</Animated.Text>
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
                        value={preco}
                        onChangeText={text => setPreco(text)}
                        cursorColor={"#79F146"} 
                    />
                    </View>

                    <SelectCountry
                        style={styles.dropdow}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        maxHeight={210}
                        value={country}
                        data={escolha}
                        valueField='value'
                        labelField='lable'
                        placeholder="Tipo de Venda"
                        onChange={ text => setCountry(text)}
                    />
                    </View>
                    
                    <FloatingLabelInput
                        label="Categoria"
                        value={categoria}
                        hintTextColor="#0C1B10"
                        containerStyles={styles.input}
                        customLabelStyles={{
                            colorFocused: "#60c237",
                            fontSizeFocused: 14,
                            colorBlurred: "#0C1B10",
                        }}
                        labelStyles={{
                            backgroundColor: "#fff",
                            paddingHorizontal: 5,
                            paddingBottom: 8
                        }}
                        keyboardType="text" 
                        cursorColor={"#79F146"} 
                        onChange={text => setCategoria(text)}
                    />
                </View>
            </Pressable>

            <View style={styles.buttons}>
                <Text onPress={() => navigation.navigate("Home")} style={styles.btnCancel}>✘ Cancelar</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btnCad}>
                    <Text style={styles.textButtom}> ✓ Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </Pressable>
    )
}