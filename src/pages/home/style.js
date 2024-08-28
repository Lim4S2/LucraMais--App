import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: "center"
    },
    headerContainer: {
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start", // Centraliza horizontalmente
        marginBottom: 20,
        gap: 10
    },
    icon: {
      width: 30,
      height: 30
    },
    companyName: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#3BAF09", // Azul escuro
      textAlign: "center", // Centraliza o texto
    },
    balanceContainer: {
      backgroundColor: "#4CAF50", // Verde
      borderColor: "#000000", // Borda preta
      borderWidth: 1,
      borderRadius: 67, // Bordas mais arredondadas para formar um círculo
      padding: 20, // Ajustado para que o texto tenha mais espaço dentro do círculo
      width: 360, // Define a largura e altura para controlar o tamanho do container
      height: 140,
      justifyContent: "space-between", // Espaça o conteúdo verticalmente
      marginBottom: 20,
      alignItems: "center", // Centraliza o conteúdo horizontalmente
    },
    balanceTitle: {
      color: "#000000", // Preto para o título
      fontSize: 20,
      textAlign: "center", // Centraliza o título
      marginTop: 10, // Ajusta a posição para cima dentro do container
    },
    balanceAmount: {
      color: "#000000", // Preto para o saldo
      fontSize: 32, // Tamanho da fonte aumentado
      fontWeight: "bold",
      textAlign: "center", // Centraliza o saldo
      marginBottom: 5, // Espaçamento abaixo do saldo
    },
    balanceDate: {
      color: "#ffffff",
      fontSize: 14,
      position: "absolute",
      bottom: 10, // Ajusta a posição do fundo
      right: 35, // Ajusta a posição da direita
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 15,
    },
    chart: {
      borderRadius: 16,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    legendContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginTop: 20,
    },
    legendItem: {
      flexDirection: "row",
      alignItems: "center",
      margin: 5,
    },
    legendColor: {
      width: 20,
      height: 20,
      borderRadius: 5,
      marginRight: 10,
    },
    legendText: {
      fontSize: 16,
      color: "#000",
    },
    filterButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#e0e0e0",
    },
    selectedFilter: {
      backgroundColor: "#ffffff",
    },
    filterText: {
      color: "#000",
    },
    infoBox: {
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 5,
      marginTop: 20,
      alignItems: "center",
    },
    infoText: {
      fontSize: 16,
      color: "#000",
    },
    chartContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    pieChartContainer: {
      flex: 1,
    },
    pieLegendContainer: {
      flex: 1,
      justifyContent: "center",
    },
  });

export default styles