import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        //marginTop: 30,
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 10,
        paddingTop: 30,
        borderBottomWidth: 1
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white"
    },
    btnFechar: {
        width: "60%",
        height: 50,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    }
})

export default styles