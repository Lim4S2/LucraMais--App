import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Retornar</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
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
  );
};

const Option = ({ icon, label }) => (
  <TouchableOpacity style={styles.option}>
    <MaterialCommunityIcons name={icon} size={24} color="#4F8EF7" />
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20
  },
  profileText: {
    flex: 1
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333'
  },
  email: {
    fontSize: 14,
    color: '#666'
  },
  editButton: {
    padding: 10,
  },
  optionContainer: {
    marginTop: 20
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333'
  },
  iconButton: {
    padding: 10,
  }
});

export default SettingsScreen;
