import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#04414b",
        alignItems: "center",
    }, 
    form: {
        marginTop: "15%",
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        //height: "56%",
        height: "auto",
        width: "80%"
    }, 
    textBox: {
        alignItems: "baseline",
        width: "100%",
    },
    logo: {
        marginTop: "7%",
        width: "65%",
        height: 105
    },
    tittle: {
        fontSize: 46,
        fontWeight: "900",
        color: "#6294ac",
        padding: 15
    },
    text:{
        color: "#7a7a7a",
        fontSize: 16
    },
    legend: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#6294ac",
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 30
    },
    plus: {
        fontSize: 16,
        fontWeight: "semibold",
        color: "#6294ac",
        marginBottom: "5%"
    }, 
    cad: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: "#6294ac",
        padding: 7
    },
    senhaCad: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        marginTop: 20,
        marginBottom: 30
    },
    input: {
        width: "90%",
        marginLeft: 15,
        paddingLeft: 10,
        borderRadius: 50,
        height: 35,
        borderColor: "#acc4cc",
        //para ter cor na borda tem que ter uma altura
        borderWidth: 2
    }, 
    buttom: {
        backgroundColor: "#6294ac",
        borderRadius: 50,
        justifyContent: "center",
        alignItems:"center",
        width: "90%",
        marginBottom: 20,
        marginTop: 1

    }, textButtom: {
        fontSize: 20,
        color:"white",
        fontWeight: "bold",
        padding: 10
    }
})

export default styles