import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 100,
      marginTop: 55
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      marginTop: 50
    },
    profileImage: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 20
    },
    profileText: {
      flex: 1
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#333'
    },
    email: {
      fontSize: 14,
      color: '#666'
    },
    editButton: {
      padding: 10,
    },
    optionContainer: {
      marginTop: 20
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
    iconButton: {
      padding: 10,
    }
  });

export default styles