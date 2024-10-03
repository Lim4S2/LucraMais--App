import { StyleSheet } from "react-native"

const stylesList = StyleSheet.create({

    produto: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: 105,
        borderRadius: 10,
        backgroundColor: "white",
        marginLeft: "5%",
        marginBottom: 40,
        elevation: 15
    },
    viewText: {
        width: "59%",
        marginLeft: "5%"
    },
    viewQuant: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10
    },
    viewButtons: {
        flexDirection: "row",
        marginTop: 8 
    },
    mais: {
        marginTop: -20,
        height: "60%",
        alignItems: "center"
    },
    valor: {
        height: "100%",
        justifyContent: "center",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#545454",
        paddingBottom: 5
    },
    descricao: {
        fontSize: 15,
        color: "#8f8f8f"
    },
    quant: {
        fontSize: 15,
        fontWeight: "500",
        color: "#545454"
    },
    sifrao: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#545454"
    }

})

export default stylesList