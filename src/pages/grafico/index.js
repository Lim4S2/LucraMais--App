// index.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

// Dados simulados
const salesData = [1500, 2000, 1700, 2200, 2500, 2300, 2100, 2400, 2700, 2900, 2800, 3000];
const expensesData = [1200, 1800, 1600, 2000, 2300, 2100, 1900, 2200, 2500, 2700, 2600, 2800];
const profitData = salesData.map((value, index) => value - expensesData[index]);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: salesData
    }
  ],
};

const filters = ['Sales', 'Expenses', 'Profit'];

const screenWidth = Dimensions.get('window').width;

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('Sales');

  // Função para obter dados filtrados com base na escolha do usuário
  const getFilteredData = () => {
    switch (selectedFilter) {
      case 'Expenses':
        return expensesData;
      case 'Profit':
        return profitData;
      default:
        return salesData;
    }
  };

  const filteredData = {
    ...data,
    datasets: [
      {
        data: getFilteredData()
      }
    ]
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gráfico de {selectedFilter}</Text>
      
      <BarChart
        data={filteredData}
        width={screenWidth - 30}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(34, 193, 195, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForBackgroundLines: {
            strokeDasharray: '', // solid background lines
          }
        }}
        style={styles.chart}
        onDataPointClick={({ value, index }) => {
          alert(`Dados para ${data.labels[index]}: $${value}`);
        }}
      />

      <View style={styles.legendContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterButton, selectedFilter === filter && styles.selectedFilter]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text style={styles.filterText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  chart: {
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 10
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0'
  },
  selectedFilter: {
    backgroundColor: '#34c759'
  },
  filterText: {
    color: '#000'
  }
});

export default App;
