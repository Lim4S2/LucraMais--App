import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: "15%",
        alignItems: 'center',
        justifyContent: "space-around",
        paddingBottom: 10,
        borderBottomWidth: 1
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
        color: "#545454"
    },
    textValor: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    venda: {
        flex: 1,
        backgroundColor: "#65c03b",
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
        backgroundColor: "yellow",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
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