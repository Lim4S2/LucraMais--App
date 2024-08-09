// index.js

import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Animated } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Svg, { Path, G } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;

// Dados simulados para gráfico de pizza
const pieData = [
  { name: 'Coxinha', population: 400, color: '#006400', legendFontColor: '#ffffff', legendFontSize: 15 }, // Dark Green
  { name: 'Coca-Cola', population: 300, color: '#228B22', legendFontColor: '#ffffff', legendFontSize: 15 }, // Forest Green
  { name: 'Pizza', population: 300, color: '#32CD32', legendFontColor: '#ffffff', legendFontSize: 15 }, // Lime Green
  { name: 'Hambúrguer', population: 200, color: '#90EE90', legendFontColor: '#ffffff', legendFontSize: 15 }, // Light Green
];

// Dados do gráfico de barras
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

const filters = [
  { name: 'Vendas', color: '#4682B4' }, // Azul
  { name: 'Despesas', color: '#FF6347' }, // Vermelho
  { name: 'Lucro', color: '#32CD32' }, // Verde
];

const AnimatedLegendItem = ({ color, text, fadeAnim }) => {
  return (
    <Animated.View style={[styles.legendItem, { opacity: fadeAnim }]}>
      <View style={[styles.legendColor, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{text}</Text>
    </Animated.View>
  );
};

const AnimatedPieChart = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Função para iniciar a animação da legenda
  const animateLegend = (index) => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Função para obter o gráfico de pizza
  const getPieChart = () => {
    const total = pieData.reduce((sum, item) => sum + item.population, 0);

    return (
      <Svg width={screenWidth - 30} height={220} viewBox="0 0 220 220">
        <G x="10" y="20">
          {pieData.map((slice, index) => {
            const startAngle = index === 0 ? 0 : pieData.slice(0, index).reduce((sum, item) => sum + item.population, 0) / total * 360;
            const endAngle = pieData.slice(0, index + 1).reduce((sum, item) => sum + item.population, 0) / total * 360;

            const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

            const startX = 110 + 100 * Math.cos((startAngle - 90) * Math.PI / 180);
            const startY = 110 + 100 * Math.sin((startAngle - 90) * Math.PI / 180);
            const endX = 110 + 100 * Math.cos((endAngle - 90) * Math.PI / 180);
            const endY = 110 + 100 * Math.sin((endAngle - 90) * Math.PI / 180);

            const pathData = `M110,110 L${startX},${startY} A100,100 0 ${largeArcFlag},1 ${endX},${endY} Z`;

            return (
              <Path
                key={index}
                d={pathData}
                fill={selectedIndex === index ? '#ddd' : slice.color}
                onPress={() => {
                  setSelectedIndex(index);
                  setSelectedData(slice);
                  animateLegend(index);
                }}
                onMouseEnter={() => {
                  setSelectedIndex(index);
                  setSelectedData(slice);
                  animateLegend(index);
                }}
                onMouseLeave={() => {
                  setSelectedIndex(null);
                  setSelectedData(null);
                  fadeAnim.setValue(0);
                }}
              />
            );
          })}
        </G>
      </Svg>
    );
  };

  return (
    <View style={styles.pieChartContainer}>
      {getPieChart()}
      <View style={styles.legendContainer}>
        {pieData.map((slice, index) => (
          <AnimatedLegendItem
            key={index}
            color={slice.color}
            text={slice.name}
            fadeAnim={fadeAnim}
          />
        ))}
      </View>
      {selectedData && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{selectedData.name}</Text>
          <Text style={styles.infoText}>{((selectedData.population / pieData.reduce((sum, item) => sum + item.population, 0)) * 100).toFixed(1)}% das vendas</Text>
        </View>
      )}
    </View>
  );
};

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('Vendas');

  // Função para obter dados filtrados com base na escolha do usuário
  const getFilteredData = () => {
    switch (selectedFilter) {
      case 'Despesas':
        return expensesData;
      case 'Lucro':
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
          color: (opacity = 1) => {
            switch (selectedFilter) {
              case 'Despesas':
                return `rgba(255, 99, 71, ${opacity})`; // Vermelho para despesas
              case 'Lucro':
                return `rgba(50, 205, 50, ${opacity})`; // Verde para lucro
              default:
                return `rgba(70, 130, 180, ${opacity})`; // Azul para vendas
            }
          },
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
          alert(`Dados para ${data.labels[index]}: R$${value}`);
        }}
      />

      <View style={styles.legendContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.name}
            style={[styles.filterButton, { backgroundColor: filter.color }, selectedFilter === filter.name && styles.selectedFilter]}
            onPress={() => setSelectedFilter(filter.name)}
          >
            <Text style={styles.filterText}>{filter.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>Gráfico de Pizza Interativo</Text>
      <AnimatedPieChart />
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
  pieChartContainer: {
    alignItems: 'center',
    marginTop: 10, // Ajusta o gráfico de pizza para cima
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0'
  },
  selectedFilter: {
    backgroundColor: '#ffffff'
  },
  filterText: {
    color: '#000'
  },
  infoBox: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
