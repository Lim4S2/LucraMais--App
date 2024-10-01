import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center"
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 70,
    padding: 10,
    backgroundColor: '#6294ac', 
    marginBottom: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  conta: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
    marginLeft: -35
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  companyName: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', 
  },
  balanceContainer: {
    width: "95%",
    padding: 20,
    backgroundColor: '#04414b',
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center", 
    elevation: 100
  },
  balanceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', 
  },
  balanceAmount: {
    fontSize: 55,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#ffffff',
  },
  balanceDate: {
    fontSize: 14,
    color: '#ffffff', 
  },
  chartContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  chartBackground: {
    borderRadius: 16,
    overflow: 'hidden',
    padding: 10,
  },
  chartDescription: {
    marginTop: 10,
    alignItems: 'center',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 20,
  },
  selectedFilter: {
    borderWidth: 2,
  },
  filterText: {
    color: 'black', //não mudar
  },
  pieChartContainer: {
    alignItems: 'center',
    borderRadius: 16,
    padding: 10,
    marginVertical: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    
  },
  legendText: {
    fontSize: 16,
    color: '#ffffff', // Texto branco
  },
  infoBox: {
    padding: 10,
    backgroundColor: '#1c1c1c', // Fundo neutro para o box de informação
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#ffffff', // Texto branco
  },
  averageButtonContainer: {
    flexDirection: 'row', // Alinha os botões horizontalmente
    justifyContent: 'space-around',
    padding: 10,
  },
  averageButton: {
    backgroundColor: '#ffffff', // Fundo branco para o botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  averageButtonText: {
    color: 'white', // Texto preto
    fontSize: 16,
  },
  lucroText: { // Novo estilo para lucro
    color: 'white', // Texto branco
    fontSize: 16,
  },
  despesaText: { // Novo estilo para despesa
    color: 'white', // Texto branco
    fontSize: 16,
  },
  vendasText: { // Novo estilo para vendas
    color: 'white', // Texto branco
    fontSize: 16,
  },
  mediaText: { // Novo estilo para média
    color: 'white', // Texto branco
    fontSize: 16,
  },
  buttonLabel: { // Novo estilo para labels dentro dos botões
    color: '#000000', // Texto preto
    fontSize: 16,
  },
});

export default styles;