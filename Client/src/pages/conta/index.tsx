import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker'
import styles from './style';

export default function Conta({navigation}) {

    const [imageUser, setImageUser] = useState<string>("https://cdn-icons-png.flaticon.com/512/6596/6596121.png")
    
    const handleImageUser = () => {
        Alert.alert("Permissão", 'Como você quer adicionar sua foto',
        [
            {
                text: "Galeria",
                onPress: () => pressGalery(),
                style: 'default'
            },
            {
                text: "Câmera",
                onPress: () => pressCamera(),
                style: "default"
            },
            /*{
                cancelable: true,
                text: "Cancelar",
                onPress: () => console.log("Cancelado"),
                style: 'cancel'
            }*/
        ])
    }

    const pressGalery = async () => {
        const options: ImageLibraryOptions = {
            mediaType: "photo"
        }
        
        const result = await launchImageLibrary(options)
        console.log(result)

        if(result?.assets) {
            setImageUser(result.assets[0].uri!)
            return
        }
    }

    const pressCamera = () => {

    }


    return (
        <View style={styles.container}>
            <View style={{alignItems: 'baseline', width: '100%'}}>
                <Text style={styles.setaEsq} onPress={() => navigation.navigate("Home")}>➱</Text>
            </View>
            
            <View style={styles.profileContainer}>

                <TouchableOpacity onPress={() => handleImageUser()}>
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