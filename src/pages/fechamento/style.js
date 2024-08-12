import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: "10%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: "#545454",
        padding: 10
    },
    viewLucro: {
        width: "90%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        marginBottom: 30,
        borderRadius: 50,
        backgroundColor: "white",
        elevation: 15
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#545454'
    },
    textDetalhe: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#545454'
    },
    viewDetalhamento: {
        marginTop: 5,
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
        marginTop: "30%",
        backgroundColor:"green",
        borderRadius: 50,
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles