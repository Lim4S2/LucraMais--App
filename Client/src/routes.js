import {createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "./pages/home"
import AbrirCaixa from "./pages/abrirCaixa"
import Estoque from "./pages/estoque"

import  TabBar  from "./components/tabBar"

const Tab = createBottomTabNavigator()

export default function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#6294ac',

                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: "#fff"
                }
            }}

            tabBar={(props) => <TabBar {...props}/> }
        >
            <Tab.Screen name="Home" component={Home} options={{ title: "Início" }}/>
            <Tab.Screen name="AbrirCaixa" component={AbrirCaixa} options={{ title: "Venda" }} />
            <Tab.Screen name="Estoque" component={Estoque} />
        </Tab.Navigator>
    )
}