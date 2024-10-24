import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#6294ac",
        padding: 10,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    viewLucro: {
        width: "95%",
        height: 110,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "8%",
        marginTop: "15%",
        borderRadius: 50,
        backgroundColor: "#04414b",
        elevation: 20
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    textDetalhe: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#545454'
    },
    viewDetalhamento: {
        marginBottom: 10,
        flexDirection: "row",
        width: "85%",
        justifyContent: "space-between",
    },
    img: {
        width: 30,
        height: 30,
        marginRight: 10
    }, 
    button: {
        position: 'relative',
        marginTop: 20,
        backgroundColor:"#6294ac",
        borderRadius: 50,
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles