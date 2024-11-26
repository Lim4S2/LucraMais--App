import React, { useRef } from "react"
import { View, Text, Image, TouchableOpacity, StatusBar, ScrollView } from  "react-native"
import styles from "./style"
import Animated from "react-native-reanimated"

export default function Sobre({navigation}) {


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
        
            <Text style={styles.setaEsq} onPress={() => navigation.navigate("Home")}>➱</Text>

            <ScrollView
                showsVerticalScrollIndicator={false} 
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
                            <Image style={styles.fotoPerfil}
                                source={require("../../images/Vinicius.jpg")}
                            />
                    
                            <View style={styles.viewInfo}>
                                <Text style={styles.nome}>Vínicius Gabriel Landgraff De Carli </Text>
                                <Text style={styles.text}>O líder do projeto e responsável pela parte de desenvolvimento e layout do aplicativo, buscando sempre uma melhor usabilidade para o usuário.</Text>
                            </View>
                        </View>
                        
                        <View style={styles.viewContato}>
                            <Text style={{...styles.text, fontWeight: 'bold'}}>Contato</Text>
                            <Text style={styles.text}>@vinicius_de_carli</Text>
                        </View>
                        
                        
                        <View style={styles.viewDev}>
                            <Image style={styles.fotoPerfil}
                                source={require("../../images/Pedro.jpg")}
                            />
                            
                            <View style={styles.viewInfo}>
                                <Text style={styles.nome}>Pedro Henrique de Lima Silveira </Text>
                                <Text style={styles.text}>Responsável pela parte de desenvolvimento, fazendo a conexão com o banco de dados e funções, além de grantir a segurança do aplicativo. </Text>
                            </View>
                        </View>
                        
                        <View style={styles.viewContato}>
                            <Text style={{...styles.text, fontWeight: 'bold'}}>Contato</Text>
                            <Text style={styles.text}>@lim4_z</Text>
                        </View>
                        
                        
                        <View style={styles.viewDev}>
                            <Image style={styles.fotoPerfil}
                                source={require("../../images/Gabriel.jpeg")}
                            />
                            
                            <View style={styles.viewInfo}>
                                <Text style={styles.nome}> Gabriel Pedro Ramos </Text>
                                <Text style={styles.text}>Responsável pela documentação e coleta de dados, identificando necessidades de adaptações e realizando correções para garantir a precisão e qualidade das informações.</Text>
                            </View>
                        </View>

                        
                        <View style={styles.viewDev}>
                            <Image style={styles.fotoPerfil}
                                source={require("../../images/Bertin.jpg")}
                            />
                            
                            <View style={styles.viewInfo}>
                                <Text style={styles.nome}> Felipe Eduardo Bertin </Text>
                                <Text style={styles.text}>Responsável pela pesquisa em saber o que é melhor para o usuário e quais são suas dificuldades, ajudando os desenvolvedores a criar um aplicativo mais fácil de usar e com uma melhor usabilidade. </Text>
                            </View>
                        </View>
                        
                        <View style={styles.viewContato}>
                            <Text style={{...styles.text, fontWeight: 'bold'}}>Contato</Text>
                            <Text style={styles.text}>@bertinfelipe_</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </ScrollView>
    )
}