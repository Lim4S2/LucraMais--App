import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 0,
        backgroundColor: "#ECECEC",
        alignItems: "center",
    },
    header:{
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#6294ac",
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    titleText:{
        marginLeft: 40,
        fontSize: 24, 
        fontWeight: 'bold',
        color: 'white',
    },
    setaEsq: {
        fontSize: 40, 
        fontWeight: '900',
        color: 'white',
        paddingLeft: 15,
        paddingRight: 10,
        marginBottom: -15, 
        marginLeft: 15, 
        transform: [{rotate: '180deg'}] 
    },
    form: {
        marginTop: 120,
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        height: "auto",
        width: "80%",
        justifyContent: "center",
        // sombra - shadow
        elevation: 30
    }, 
    textBox: {
        alignItems: "center",
        width: "100%",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#04414b",
        marginTop: 8
    },
    input: {
        width: "90%",
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 50,
        height: 35,
        borderColor: "#acc4cc",
        //para ter cor na borda tem que ter uma altura
        borderWidth: 2
    }, 
    buttons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 100
    },
    btnCad: {
        backgroundColor: "#04414b",
        borderRadius: 50,
        justifyContent: "center",
        alignItems:"center",
        width: "50%",
        height: 50
    }, textButtom: {
        fontSize: 18,
        color:"white",
        fontWeight: "bold",
        padding: 8
    },
    btnCancel: {
        color: "#D47A7A",
        fontWeight: "bold",
        fontSize: 18, 
    }
})

export default styles