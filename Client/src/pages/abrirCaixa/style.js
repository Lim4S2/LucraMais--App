import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        marginTop: 55,
        height: 50, 
        flexDirection: 'row',
        alignItems: 'center',
    },

    titulotext:{
        marginLeft: 80,
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#6B983C',
    },

    setaEsq: {
        fontSize: 40, 
        fontWeight: '900',
        color: '#6B983C',
        marginBottom:-15, 
        marginLeft: 15, 
        transform: [{rotate: '180deg'}] 
    },

    buttom:{
        flexDirection: 'row',
        backgroundColor: '#38A209',
        padding: 20,
        width: 300,
        borderRadius: 20,
        justifyContent:'center',
    },

    buttomcaixa:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButtom:{
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 20,
    },

    icondol:{
        marginLeft: 25,
        width: 30,
        height: 30,
    }
});

export default styles