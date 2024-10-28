import React, { useRef } from "react"
import { View, Text, Image, TouchableOpacity, StatusBar, ScrollView } from  "react-native"
import styles from "./style"
import Animated from "react-native-reanimated"

export default function Sobre() {


    return (
        <ScrollView 
            contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}
            
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            >
            <StatusBar 
                backgroundColor='transparent' 
                translucent={true} 
                barStyle="dark-content"
                />

            <ScrollView
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ paddingBottom: 20}}
            >
                <View>
                    <Image
                        source={require("../../images/imagemTeste.jpg")} 
                    /> 
                    
                    <View style={styles.sobreNos}>
                        <Text style={styles.title}> Sobre o aplicativo </Text>
                        
                        <Text style={styles.text}> 
                            Esse aplicativo foi feito para o Trabalho de Conclusão de Curso (TCC) de escola Etec Dep. Salim Sedeh, onde o intúito do projeto é ajudar o pequeno vendedor, para que ele possa ter um controle melhor sobre suas vendas, tendo vários relatórios e informações para que ele possa tirar uma conclusão melhor sobre seu trablho e poder melhorar com base nos dados fornecidos pelo aplicativo.
                        </Text>
                        <Text style={styles.text}>
                            É com muito orgulho que nós alunos do ensino médio fizemos esse aplicativo, pois foi um grande desafio, mas também foi uma grande oportunidade para nós aprendermos e ajudar as pessoas.
                        </Text>

                        <Text style={styles.title}> Desenvolvedores </Text>

                        <View style={styles.viewDev}>
                            <View style={{flexDirection: 'row', width: '65%', justifyContent: 'center', alignItems: 'center', gap: 20}}>
                                <Image style={styles.fotoPerfil}
                                    source={require("../../images/Vinicius.jpg")}
                                />
                                <Text style={styles.nome}>Vínicius Gabriel Landgraff De Carli </Text>
                            </View>
                                <Text style={styles.text}>O líder do projeto e responsável pela parte de desenvolvimento e layout do aplicativo, buscando sempre uma melhor usabilidade para o usuário.</Text>
                        </View>
                        
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', gap: 10, marginVertical: 20
                            }}>
                            <Image style={{width: "30%", height: "100%", borderRadius: 10}}
                                source={require("../../images/Pedro.jpg")}
                            />
                            <View style={{width: '70%', justifyContent: 'space-between'}}>
                                <Text style={styles.nome}>Pedro Henrique de Lima Silveira </Text>
                                <Text style={styles.text}>Responsável pela parte de desenvolvimento, fazendo a conexão com o banco de dados e funções, além de grantir a segurança do aplicativo. </Text>
                            </View>
                        </View>
                        
                        
                        <View  style={{alignItems: "center", marginVertical: 25}}>
                            <Image style={{width: 200,  height: 200, borderRadius: 10}}
                                source={require("../../images/Gabriel.jpeg")}
                            />
                            <View  style={{width: '100%', alignItems: 'center'}}>

                                <Text style={styles.nome}> Gabriel Pedro Ramos </Text>
                                <Text style={styles.text}>Responsável pelo apoio moral, trazendo sempre o café quente e do gosto dos desenvolvedores </Text>
                            </View>
                        </View>

                        <View>
                            <Image style={styles.fotoPerfil}/>
                            <View>
                                <Text style={styles.nome}> Felipe Eduardo Bertin </Text>
                                <Text style={styles.text}>Responsável pela pesquisa em saber o que é melhor para o usuário e quais são suas dificuldades, ajudando os desenvolvedores a criar um aplicativo mais fácil de usar e com uma melhor usabilidade. </Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </ScrollView>
    )
}