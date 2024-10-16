import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: "8%",
        backgroundColor: "#6294ac",
        justifyContent: "center",
        alignItems: 'center',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    containerReceita: {
        width: "100%",
        justifyContent: "space-between",
        marginLeft: 10, 
        flexDirection: "row", 
        alignItems: "center",
        marginVertical: 10
    },
    barChart: {
        height: "auto",
        backgroundColor: "white",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 15, 
        gap: 15, 
        alignItems: "baseline",
        justifyContent: "flex-end",
        elevation: 5,
        marginBottom: 50
    },
    buttonsFiltro: {
        marginTop: 20,
        flexDirection: "row",
        width:  "100%",
        justifyContent: "space-around",
    },
    button: {
        justifyContent: "center",  
        alignItems: "center", 
        borderRadius: 10,
        borderColor: "#2b972b",
        borderWidth: 2,
        width: 90,
        height: 35
    },
    buttonPress: {
        backgroundColor: "#2b972b",
        width: 90,
        height: 35,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    textButtons: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2b972b"
    },

    // estilos do gráfico de pie
    titleChart: {
        fontSize: 20,
        fontWeight: "bold"
    },
    pieChart: {
        marginTop: 30,
        backgroundColor:  "#c5c3c3",
        width: "90%",
        borderRadius: 20,
        elevation: 10,
        alignItems: "center",
        padding: 10,
        gap: 10
    },
    graficoPie: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    graficoPieContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "55%"
    },
    graficoPieContainerLegend: {
        width:  "40%",
        justifyContent: "center",
    },
    containerLegend: {
        flexDirection: "row", 
        alignItems: "center"
    },
    viewLegendColor: {
        justifyContent: "center", 
        marginLeft: 10, 
        padding: 10
    },
    legendColor: {
        borderRadius: 10, 
        width: 15, 
        height: 15
    },
    legendName: {
        color: "black",
        fontSize: 16
    }
})

export default styles