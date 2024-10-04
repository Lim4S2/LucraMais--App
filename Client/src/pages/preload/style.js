import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04414b",
        justifyContent: "space-around",
        alignItems: "center",
    },
    containerLoading: {
        width: "90%",
        marginTop: "40%",
    },
    logo: {
        marginTop: "40%",
        width: "100%",
        height: 250
    },
    trator: {
        width: 100,
        height: 95,
        //marginBottom: 14,
        zIndex: 1,
    }, 
    carregamento: {
        width: "100%", 
        marginBottom: "20%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles