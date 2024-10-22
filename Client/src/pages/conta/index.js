import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import styles from './style';

export default function Conta({navigation}) {

    // para que o usuário possa mudar a foto de perfil
    const [imageUser, setImageUser] = useState("https://cdn-icons-png.flaticon.com/512/6596/6596121.png")
    
    const handleImageUser = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1
        })

        if (!result.canceled) {
            setImageUser(result.assets[0].uri)
        }
    }


    return (
        <View style={styles.container}>
            <View style={{alignItems: 'baseline', width: '100%'}}>
                <Text style={styles.setaEsq} onPress={() => navigation.navigate("Home")}>➱</Text>
            </View>
            
            <View style={styles.profileContainer}>

                <TouchableOpacity onPress={handleImageUser}>
                    <Image source={{
                        uri: imageUser
                    }} 
                    style={styles.profileImage} />
                </TouchableOpacity>

                <View style={styles.profileText}>
                    <Text style={styles.name}>Vinicius Gabriel Landgraf de Carli</Text>
                    <Text style={styles.email}>viniciusmalvadao@gmail.com</Text>
                </View>
            </View>

            <View style={styles.optionContainer}>
                <View style={{ width: '100%' }}>
                    <View>
                        <Text>Conta e informações pessoais</Text>
                    </View>
                    <Text>Configurações</Text>
                    <Text>Sobre o aplicativo</Text>
                    <Text>Suporte</Text>
                    <Text>Sair</Text>
                </View>
            </View>
        </View>

    )
}