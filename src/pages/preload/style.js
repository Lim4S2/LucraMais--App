import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#306318",
        justifyContent: "space-around",
        alignItems: "center",
    },
    containerLoading: {
        width: "90%",
        marginTop: "40%",
    },
    logo: {
        marginTop: "65%",
        width: "95%",
        height: 178
    },
    terra: {
        width: "100%",
        height: 6, 
        marginTop: -30,
        borderRadius: 50
        //marginLeft: 10
    },
    trator: {
        width: 90,
        height: 85,
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