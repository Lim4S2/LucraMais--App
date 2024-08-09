import React from "react"
import {Pressable, Text, TextInput, View, Keyboard, TouchableOpacity} from "react-native"
import styles from "./style"

export default function Produto({navigation}) {
    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.setaEsq} onPress={() => navigation.navigate("Estoque")}>➱</Text>
                <Text style={styles.titleText}>Cadastro de produto</Text>
            </View>
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <View style={styles.textBox}>
                    <TextInput style={styles.input}
                    keyboardType="text" placeholder="Nome do produto" placeholderTextColor={"#0C1B10"} />
            
                    <TextInput style={styles.input} 
                    keyboardType="text" placeholder="Descrição" placeholderTextColor={"#0C1B10"} />
            
                    <TextInput style={styles.input}
                    keyboardType="numeric" placeholder="Quantidade" placeholderTextColor={"#0C1B10"} />
            
                    <TextInput style={styles.input}
                    keyboardType="numeric" placeholder="Preço" placeholderTextColor={"#0C1B10"} />
            
                    <TextInput style={styles.input}
                    //tem que ser dropdown ou dropdown-piker
                    keyboardType="text" placeholder="Tipo de venda" placeholderTextColor={"#0C1B10"} />
                    
                    <TextInput style={styles.input}
                    keyboardType="text" placeholder="Categoria" placeholderTextColor={"#0C1B10"} />
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