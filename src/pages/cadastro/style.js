import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        bottom: 0,
        backgroundColor: "#306318",
        alignItems: "center",
    },
    form: {
        marginTop: "25%",
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        height: 560,
        width: "80%"
    }, 
    textBox: {
        alignItems: "baseline",
        width: "100%",
    },
    tittle: {
        fontSize: 40,
        fontWeight: "900",
        color: "#6B983C",
        paddingTop: 15,
        //paddingBottom: 5
    },
    legend: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6B983C",
        paddingTop: 15,
        paddingBottom: 3,
        paddingLeft: 30
    },
    input: {
        width: "90%",
        marginLeft: 15,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 50,
        height: 35,
        borderColor: "#DBDBDB",
        //para ter cor na borda tem que ter uma altura
        borderWidth: 2
    }, 
    plus: {
        fontSize: 16,
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 15,
        paddingLeft: 15,
        fontWeight: "semibold",
        color: "#6B983C",
    }, 
    buttom: {
        backgroundColor: "#6B983C",
        borderRadius: 50,
        justifyContent: "center",
        alignItems:"center",
        width: "90%",
        height: 39,
        marginBottom: 12,
        marginTop: 33
    }, textButtom: {
        fontSize: 18,
        color:"white",
        fontWeight: "bold",
    },
    img: {
        width: "63%",
        height: "15%",
        marginTop: 15
    }

})

export default styles