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
    page: {
        flex: 1,
        alignItems: 'center'
    },
    form: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 15,
        elevation: 10,
        marginTop: '10%',
        //marginBottom: '40%'
    },
    view: {
        width:  '100%',
        height: "auto",
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 5,
    },
    viewInput: {
        marginTop: 15,
        flexDirection: "row",
        gap: 10, 
        width: '90%', 
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    title: {
        marginTop: '20%',
        fontSize: 24,
        fontWeight: "bold",
        color: "#04414b"
    },
    input: {
        width: "100%",
        height: 44,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 50,
        borderColor: "#acc4cc",
        //para ter cor na borda tem que ter uma altura
        borderWidth: 2
    },
    label: {
        position: "absolute",
        paddingHorizontal: 5,
        marginLeft: 22
    },
    viewList: {
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        maxHeight: 350
    },
    itemDespesa: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemText: {
        fontSize: 18,
        color: "#545454"
    },
    sifrao: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#545454"
    },
    btnProx: {
        width: "85%",
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: "#04414b",
        position: 'relative',
        marginTop: '20%'
    },
    textBtn: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    btnAdd: {
        position: "absolute",
        bottom: "-30%",
        right: "-3%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04414b',
        width:  45,
        height: 45,
        borderRadius: 50
    },
    textAdd: {
        fontSize: 24,
        color: "white",
    }
})

export default styles