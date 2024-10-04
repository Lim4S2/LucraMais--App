import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around",
        backgroundColor: "#6294ac",
        paddingBottom: 10,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    viewValorCompra: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    viewCompra: {
        height: "25%",
        flexDirection: "row-reverse",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white"
    },
    textValor: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    venda: {
        height: 250,
        backgroundColor: "#6294ac",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
        gap: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    formaPg: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    btnVender: {
        width: "95%",
        height: 50,
        backgroundColor: "#acc4cc",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold"
    },
    setaEsq: {
        fontSize: 40, 
        fontWeight: '900',
        color: 'white',
        paddingLeft: 15,
        marginBottom: -15, 
        transform: [{rotate: '180deg'}] 
    },


    // fazendo o style do radio button
    wrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    radio: {
        width: 30,
        height: 30,
        borderColor: "white",
        borderRadius: 20,
        borderWidth: 2,
        margin: 10
    },
    radioBg: {
        backgroundColor: "#DBDBDB",
        height: 20,
        width: 20,
        margin: 3,
        borderRadius: 20
    },
    textRadio: {
        fontSize: 16,
        fontWeight: "semibold",
        color: "white"
    }
})

export default styles