import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 0,
        backgroundColor: "#ECECEC",
        alignItems: "center",
        justifyContent: "center"
    },
    header:{
        marginTop: 30,
        height: 50,
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText:{
        marginLeft: 40,
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#6B983C',
    },
    setaEsq: {
        fontSize: 40, 
        fontWeight: '900',
        color: '#6B983C',
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
        color: "#6B983C",
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
        borderColor: "#79F146",
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
        backgroundColor: "#6B983C",
        borderRadius: 50,
        justifyContent: "center",
        alignItems:"center",
        width: "50%"
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