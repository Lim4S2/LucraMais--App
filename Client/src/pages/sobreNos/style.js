import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    sobreNos: {
        flex:  1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: -25,
        paddingHorizontal: 15
    }, 
    setaEsq: {
        fontSize: 40, 
        fontWeight: '900',
        color: '#fff',
        paddingLeft: 15,
        paddingRight: 10,
        marginLeft: 15,
        marginVertical: 15, 
        transform: [{rotate: '180deg'}],
      },
    viewDev: {
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontSize: 24,
        color: '#6294ac',
        fontWeight: 'bold',
        marginVertical: 15
    },
    text: {
        fontSize: 16, 
        color: "#3d3d3d",
        marginBottom: 15,
        textAlign: "justify"
        //marginVertical: 5
    },
    nome: {
        fontSize: 24,
        color: '#252525',
        fontWeight: 'bold',
        textAlign: 'center'
    }, 
    fotoPerfil: {
        width: 100,
        height: 100,
        borderRadius: 20,
    }
})

export default styles