import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1c1c1c', 
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  companyName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', 
  },
  balanceContainer: {
    padding: 20,
    backgroundColor: '#2f4f4f',
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', 
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#ffffff',
  },
  balanceDate: {
    fontSize: 14,
    color: '#ffffff', 
  },
  chartContainer: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
  },
  chartBackground: {
    borderRadius: 16,
    overflow: 'hidden',
    padding: 10,
    backgroundColor: '#2e2e2e', 
  },
  chartDescription: {
    marginTop: 10,
    alignItems: 'center',
    color: 'white',
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
    borderColor: 'white', 
  },
  filterText: {
    color: 'black', //não mudar
  },
  pieChartContainer: {
    alignItems: 'center',
    borderRadius: 16,
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#2b2b2b',
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
