import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonTab: {
        position: "absolute",
        bottom: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", 
        backgroundColor: 'white',
        marginHorizontal: 60,
        paddingVertical: 8,
        borderRadius: 50,
        elevation: 10,
    }, 
    tabbarItem: {
        flex: 1,
        width: 75,
        height: 60,
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 99,
        gap: 5,
    }
})

export default styles
