import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 0
    },
    header:{
        marginTop: "15%",
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    titleText:{
        fontSize: 28, 
        fontWeight: 'bold',
        color: '#6B983C',
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
        backgroundColor: "#6B983C",
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
        width: '90%',
        borderRadius: 50,
        borderColor: "#DBDBDB", 
        borderWidth: 2,
        paddingLeft: 15,
        paddingRight: 15,
        height: 40,
        marginTop: 20
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
    }
})

export default styles