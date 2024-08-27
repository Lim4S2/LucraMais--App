import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import styles from './style';

export default function Conta({navigation}) {

    const Option = ({ icon, label }) => (
        <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name={icon} size={24} color="#4F8EF7" />
            <Text style={styles.optionText}>{label}</Text>
        </TouchableOpacity>
    )

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}style={{paddingTop: 50}}>
                <Image source={require("../../images/setaesq.png")}
                    style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
            <View style={styles.profileContainer}>
                <Image source={require("../../images/avatarFeirante.png")} style={styles.profileImage} />
                <View style={styles.profileText}>
                    <Text style={styles.name}>Vinicius Gabriel Landgraf de Carli</Text>
                    <Text style={styles.email}>viniciusmalvadao@gmail.com</Text>
                </View>
                <TouchableOpacity style={styles.editButton}>
                    <MaterialIcons name="edit" size={24} color="#4F8EF7" />
                </TouchableOpacity>
            </View>

            <View style={styles.optionContainer}>
                <Option icon="setting" label="Configurações" />
                <Option icon="account-circle-outline" label="Suporte" />
                <Option icon="google" label="Google" />
                <Option icon="exit-to-app" label="Sair" />
            </View>
        </ScrollView>

    )
}