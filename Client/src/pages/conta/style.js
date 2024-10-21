import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#6294ac",
      alignItems: "center"
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
    profileContainer: {
      alignItems: 'center',
      gap: 20
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 35,
      marginRight: 20
    },
    profileText: {
      alignItems: "center"
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white'
    },
    email: {
      fontSize: 14,
      color: '#f1f1f1'
    },
    optionContainer: {
      marginTop: 40,
      backgroundColor: 'white',
      width: '100%',
      alignItems: 'center',
      padding: 20,
      flex: 2,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee'
    },
    optionText: {
      marginLeft: 10,
      fontSize: 16,
      color: '#333'
    },
  });

export default styles