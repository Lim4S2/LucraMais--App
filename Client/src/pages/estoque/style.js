import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 0
    },
    header:{
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end",
        backgroundColor: "#6294ac",
        paddingTop: 10,
        paddingBottom: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    titleText:{
        fontSize: 28, 
        fontWeight: 'bold',
        color: 'white',
        marginRight: "20%"
    },
    buttons: {
        flexDirection: "row-reverse",
        marginTop: 40
    },
    buttonCadPro: {
        height: 38,
        width: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: "#04414b",
        marginLeft: 20, 
        marginRight: 20
    },
    textCadProd: {
        fontSize: 18,
        fontWeight: "semibold",
        color: "white",
    }, 
    viewInput: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        width: '93%',
        borderRadius: 50,
        borderColor: "#acc4cc", 
        borderWidth: 2,
        paddingLeft: 15,
        paddingRight: 15,
        height: 45,
        marginTop: 5
    },
    imgPesq: {
        height: 25,
        width: 25
    },
    containerTitle: {
        marginLeft: 70,
        justifyContent: "center",
        width: "50%",
        alignItems: "center",
    },
    
    // Dropdown
    viewFiltro: {
        width: '40%', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    filtro: {
        width: "22%", 
        height:  30,
    }, 
    imgFiltro: {
        width: 18,
        height: 18
    },
    renderItem: {

    }
})

export default styles