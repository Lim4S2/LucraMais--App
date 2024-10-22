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
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
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
        width: 75,
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
    infoMes: {
        marginVertical: 5,
        flexDirection: 'row',
        width: '85%', 
        justifyContent:  'space-between'
    },  
    descMes: {
        fontSize: 18,
        color: "#545454",
        fontWeight:  "500"

    },

    // estilos do gráfico de pie
    titleChart: {
        fontSize: 20,
        fontWeight: "bold"
    },
    pieChart: {
        marginTop: 15,
        width: "95%",
        alignItems: "center",
        padding: 10,
        gap: 20
    },
    graficoPie: {
        marginLeft: '-6%',
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%'
        //gap: 20
    },
    graficoPieContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "55%",
    },
    graficoPieContainerLegend: {
        width:  "40%",
        justifyContent: "space-evenly"
    },
    containerLegend: {
        flexDirection: "row", 
        alignItems: "center", 
    },
    viewLegendColor: {
        width: 5,
        height: 5,
        backgroundColor: "#9400D3",
        borderRadius: 15,
        padding: 10
    },
    legendName: {
        color: "black",
        fontSize: 18,
        fontWeight: '500'
    }
})

export default styles