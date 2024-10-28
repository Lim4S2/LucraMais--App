import { StyleSheet } from "react-native"

const stylesList = StyleSheet.create({

    produto: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "90%",
        height: 80,
        borderRadius: 10,
        backgroundColor: "white",
        marginLeft: "5%",
        marginBottom: 40,
        elevation: 10,
        paddingRight: 10
    },
    viewTittle: {
        width: "60%"
    },
    viewAddCar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    viewValor: {
        height: "100%",
        justifyContent: "center",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#545454",
        paddingBottom: 5
    },
    sifrao: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#545454"
    },
    btnMenos: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e9584e",
        borderRadius: 50,
        width: 30,
        height: 30
    }

})

export default stylesList