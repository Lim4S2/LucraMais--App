import React, { useRef, useCallback, useMemo} from "react"
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet from "@gorhom/bottom-sheet"
import styles from "./style"
import stylesList from "../venda/stylesList.js"

export default function Carrinho({ navigation }) {

    const bottomSheetRef = useRef(null)
    const snapPoints = useMemo(() => ["20%", "40%"], [])


    const DATA = [
        {
            tittle: "Coxinha",
            descricao: "Coxinha de frango com catupiry",
            quantidade: 20,
            categoria: "Salgado assado",
            preco: 3.50
        },
        {
            tittle: "Suco de laranjna",
            descricao: "Suco de laranja natural - 500ml",
            quantidade: 5,
            categoria: "Babida",
            preco: 5.00
        },
        {
            tittle: "Batata",
            descricao: "Batata sem produtos químicos",
            quantidade: 1,
            categoria: "Legume",
            preco: 8.00

        },
        {
            tittle: "Pastel de Carne",
            descricao: "",
            quantidade: 0,
            categoria: "Pastel salgado",
            preco: 6.00
        },
        {
            tittle: "Caldo de cana",
            descricao: "Sabor abacaxi ou limão - 400ml",
            quantidade: 10,
            categoria: "Bebida",
            preco: 5.50
        }

    ]

    const [selectedRadio, setSelectedRadio] = React.useState(3)

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
                <View style={styles.container}>
                    <Image source={require("../../images/iconCesta.png")}
                        style={{ width: 40, height: 40, marginRight: 20 }}
                    />
                    <Text style={styles.text}>Cesta de compras</Text>
                </View>

                <View style={{
                    marginTop: 10,
                    height: "50%"
                }}>
                    <FlatList
                        data={DATA}
                        contentContainerStyle={{ paddingTop: 15 }}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <View style={stylesList.produto}>
                                        <View style={stylesList.viewTittle}>
                                            <Text style={stylesList.titulo}>{item.tittle}</Text>
                                            <View style={stylesList.viewAddCar}>
                                                <TouchableOpacity style={stylesList.btnMenos}>
                                                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>-</Text>
                                                </TouchableOpacity>

                                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>1</Text>

                                                <TouchableOpacity style={{ ...stylesList.btnMenos, backgroundColor: "#8DEB84" }}>
                                                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>+</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity>
                                                    <Image source={require("../../images/iconLixeira.png")}
                                                        style={{ width: 30, height: 30, marginLeft: 50 }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <View style={stylesList.viewValor}>
                                            <Text style={stylesList.sifrao}>R$
                                                <Text style={{ color: "white" }}>_</Text>
                                                <Text style={{ ...stylesList.sifrao, fontSize: 34 }}>{item.preco}</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>

                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    index={0}
                    backgroundStyle={{backgroundColor: "#65c03b"}}
                >
                    <View style={styles.venda}>
                        <View style={styles.viewCompra}>
                            <Text style={{ ...styles.textValor, fontWeight: "bold" }}>R$
                                <Text style={{ color: "#306318" }}>_</Text>
                                <Text style={{ ...styles.textValor, fontSize: 36, fontWeight: "bold" }}>28,00</Text>
                            </Text>

                            <View style={{
                                alignItems: "center"
                            }}>
                                <Text style={{ ...styles.textValor, fontWeight: "semibold", fontSize: 22 }}>Quantidade de itens</Text>
                                <Text style={{ ...styles.textValor, fontSize: 30, fontWeight: "bold" }}>5</Text>
                            </View>
                        </View>

                        <Text style={styles.textValor}>Forma de pagamento</Text>

                        <View style={styles.formaPg}>
                            <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                                <View style={styles.wrapper}>
                                    <View style={styles.radio}>
                                        {selectedRadio == 1 ? <View style={styles.radioBg}></View> : null}
                                    </View>
                                    <Text style={styles.textRadio}>Dinheiro</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                                <View style={styles.wrapper}>
                                    <View style={styles.radio}>
                                        {selectedRadio == 2 ? <View style={styles.radioBg}></View> : null}
                                    </View>
                                    <Text style={styles.textRadio}>PIX</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelectedRadio(3)}>
                                <View style={styles.wrapper}>
                                    <View style={styles.radio}>
                                        {selectedRadio == 3 ? <View style={styles.radioBg}></View> : null}
                                    </View>
                                    <Text style={styles.textRadio}>Cartão</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.btnVender}
                            onPress={() => navigation.navigate("Venda")}>
                            <Text style={styles.textButton}>Vender</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}