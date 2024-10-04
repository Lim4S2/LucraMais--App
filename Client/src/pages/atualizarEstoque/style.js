import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 0,
        backgroundColor: "#ECECEC"
    },
    header:{
        marginTop: 50,
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
    }
})

export default styles