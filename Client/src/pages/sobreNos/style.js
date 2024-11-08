import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    sobreNos: {
        flex:  1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: -25,
        paddingHorizontal: 15,
    }, 

    setaEsq: {
        position: 'absolute',
        top: 60,
        zIndex: 1,
        fontSize: 40, 
        fontWeight: '900',
        color: 'black',
        paddingLeft: 15,
        paddingRight: 10,
        marginLeft: 15,
        transform: [{rotate: '180deg'}],
    },

    viewDev: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 15, 
        marginVertical: 20, 
        paddingHorizontal: 10
    },

    viewInfo: {
        width: '70%', 
        justifyContent: 'space-between', 
        gap: 10
    },

    viewContato: {
        flexDirection: 'row', 
        width: '85%', 
        justifyContent: 'space-between', 
        marginTop: '-5%',
        marginBottom: 10
    },

    title: {
        fontSize: 28,
        color: '#6294ac',
        fontWeight: 'bold',
        marginVertical: 15
    },

    text: {
        fontSize: 17, 
        color: "#3d3d3d",
        marginBottom: 15,
        textAlign: "justify",
        marginVertical: "2%"
    },

    nome: {
        fontSize: 24,
        color: '#252525',
        fontWeight: 'bold',
        textAlign: 'center'
    }, 

    fotoPerfil: {
        width: "30%", 
        height: "100%", 
        borderRadius: 10
    }
})

export default styles