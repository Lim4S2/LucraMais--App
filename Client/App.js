import React from "react"
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack'

import Routes from "./src/routes";
import Preload from "./src/pages/preload/index"
import Cadastro from "./src/pages/cadastro/index"
import Login from "./src/pages/login/index"
import Produto from "./src/pages/cadProd/index"
import Venda from "./src/pages/venda/"
import Conta from "./src/pages/conta/"
import Fechamento from "./src/pages/fechamento"
import AtualizarProd from "./src/pages/atualizarEstoque"
import Carrinho from "./src/pages/carrinho";
import Despesas from "./src/pages/despesas";
import Sobre from "./src/pages/sobreNos";

const Stack = createStackNavigator();


export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false}} initialRouteName="Preload">
          <Stack.Screen name="Preload" component={Preload} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Produto" component={Produto} />
          <Stack.Screen name="Venda" component={Venda} />
          <Stack.Screen name="Fechamento" component={Fechamento} />
          <Stack.Screen name="Conta" component={Conta}/>
          <Stack.Screen name="AtualizarProd" component={AtualizarProd} />
          <Stack.Screen name="Home" component={Routes} />
          <Stack.Screen name="Carrinho" component={Carrinho}/>
          <Stack.Screen name="Despesas" component={Despesas}/>
          <Stack.Screen name="Sobre" component={Sobre}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  