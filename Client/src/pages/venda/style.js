import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#6294ac",
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 10,
        paddingTop: 5,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white"
    },
    btnFechar: {
        width: "60%",
        height: 50,
        backgroundColor: "#04414b",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    }
})

export default styles