import React, { children } from "react"
import {View, Image, TouchableOpacity} from "react-native"
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Preload from "./src/pages/preload/index"
import Cadastro from "./src/pages/cadastro/index"
import Login from "./src/pages/login/index"
import Home from "./src/pages/home/"
import Produto from "./src/pages/cadProd/index"
import Grafico from "./src/pages/grafico/"
import AbrirCaixa from "./src/pages/abrirCaixa/"
import Venda from "./src/pages/venda/"
import Estoque from "./src/pages/estoque/"
import Conta from "./src/pages/conta/"
import styles from "./style"
import Fechamento from "./src/pages/fechamento"
import AtualizarProd from "./src/pages/atualizarEstoque"
import Carrinho from "./src/pages/carrinho";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// para fazer o botão flutuante
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    //fazendo um link de um style dentro de outro
  }}
  onPress={onPress}
  >
    <View style={{
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: '#04414b',
      ...styles.shadow
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

function Tabs() {
  return(
    <Tab.Navigator
      initialRouteName="Inicio"

      screenOptions={{
        //tira a barra em cima de todas as telas
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#4DEF5A",
        tabBarInactiveTintColor: "",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#acc4cc",
          borderTopWidth: 0,
          height: "6%",
          bottom: 12,
          left: 12,
          right: 12,
          borderRadius: 12,
          borderColor: "#04414b",
          borderWidth: 2,
          ...styles.shadow
        }
      }}>

      <Tab.Screen name="Início" component={Home} 
      options={{
        tabBarIcon: ({focused}) => {
          if (focused) {
            return(
          <View>
            <Image source={require("./src/images/iconHomeFocus.png")}
            style={{
              height: 35,
              width: 35
            }}/>
          </View>
          )}
          return (
          <View>
            <Image source={require("./src/images/iconHome.png")}
            style={{
              height: 25,
              width: 25
            }}
            />
          </View>)
        }
      }}/>

      <Tab.Screen name="AbrirCaixa" component={AbrirCaixa} 
      options={{
        tabBarIcon: ({focused}) => (
          <Image source={require("./src/images/iconVendaFocus.png")} 
          // ver o que faz essa função
          resizeMode="contain"
          style={{
            height: 38,
            width: 38
            }}/>
        ),
        tabBarButton: (props) => (
          <CustomTabBarButton {...props}/>
        )
      }}/>

      <Tab.Screen name="Estoque" component={Estoque} 
      options={{
        title: "Estoque",
        tabBarIcon: ({focused}) => {
          if(focused) {
            return(
              <View>
                <Image source={require("./src/images/iconEstoqueFocus.png")} 
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: 15
                }}
                />
              </View>
            )}
          return(
            <View>
              <Image source={require("./src/images/iconEstoque.png")}
              style={{
                height: 25,
                width: 25,
                marginLeft: 15
              }}
              />
            </View>)
          }
      }}/>


    </Tab.Navigator>
  )
}

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false}} initialRouteName="Preload">
          <Stack.Screen name="Preload" component={Preload} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Produto" component={Produto} />
          <Stack.Screen name="Abrir Caixa" component={AbrirCaixa} />
          <Stack.Screen name="Venda" component={Venda} />
          <Stack.Screen name="Fechamento" component={Fechamento} />
          <Stack.Screen name="Conta" component={Conta}/>
          <Stack.Screen name="AtualizarProd" component={AtualizarProd} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Carrinho" component={Carrinho}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  