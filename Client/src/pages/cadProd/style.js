import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        bottom: 0,
        backgroundColor: "#ECECEC",
        alignItems: "center",
        //justifyContent: "center"
    },
    header:{
        backgroundColor: "#6294ac",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        height: 50,
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText:{
        marginLeft: 40,
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#fff',
    },
    setaEsq: {
        fontSize: 40, 
        fontWeight: '900',
        color: '#fff',
        paddingLeft: 15,
        paddingRight: 10,
        marginBottom: -15, 
        marginLeft: 15, 
        transform: [{rotate: '180deg'}] 
    },
    form: {
        marginTop: "30%",
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        height: 380,
        width: "80%",
        justifyContent: "center",
        // sombra - shadow
        elevation: 30
    }, 
    label: {
        position: "absolute",
        paddingHorizontal: 5,
        marginLeft: 22
    },
    textBox: {
        alignItems: "center",
        width: "90%",
    },
    input: {
        width: "100%",
        height: 44,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        borderColor: "#acc4cc",
        //para ter cor na borda tem que ter uma altura
        borderWidth: 2
    }, 
    plus: {
        fontSize: 16,
        fontWeight: "semibold",
        color: "#6B983C",
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
        fontSize: 20,
        color:"white",
        fontWeight: "bold",
        padding: 8
    },
    btnCancel: {
        color: "#D47A7A",
        fontWeight: "bold",
        fontSize: 18, 
    },
    viewPreTip: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },

    // Dropdow
    dropdow: {
        width: "45%",
        paddingHorizontal: 15,
        height: 44,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#acc4cc"
    },
    selectedTextStyle: {
        color: "#0B1C10",
        fontSize: 14
    }
})

export default styles