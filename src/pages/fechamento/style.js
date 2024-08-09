import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: "10%",
        justifyContent: "center",
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: "#545454",
        padding: 10
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
    }
})

export default styles