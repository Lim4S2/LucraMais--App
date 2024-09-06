import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 10, // Adicionei padding para dar algum espaçamento interno
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10, // Borda arredondada
    backgroundColor: '#fff', // Fundo branco para destacar
    marginBottom: 20, // Espaçamento inferior
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20, // Borda arredondada para o ícone
  },
  companyName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceContainer: {
    padding: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff', // Cor do texto
  },
  balanceDate: {
    fontSize: 14,
    color: '#eee', // Cor do texto
  },
  chartContainer: {
    padding: 20,
    borderRadius: 20
  },
  chartBackground: {
    //backgroundColor: '#fff', // Fundo branco para o gráfico
    borderRadius: 16, // Borda arredondada
    overflow: 'hidden', // Garante que o gráfico de barras não ultrapasse os limites
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
    borderRadius: 20, // Borda arredondada para o botão do filtro
  },
  selectedFilter: {
    borderWidth: 2,
    borderColor: '#000',
  },
  filterText: {
    color: '#fff',
  },
  pieChartContainer: {
    alignItems: 'center',
    //backgroundColor: 'red', // Fundo branco para o gráfico de pizza
    borderRadius: 16, // Borda arredondada
    padding: 10,
    marginVertical: 20, // Espaçamento vertical
  },
  pieLegendContainer: {
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10, // Borda arredondada para o quadrado de cor
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
  },
  infoBox: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
  },
});

export default styles;
