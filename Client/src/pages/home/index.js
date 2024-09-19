import React, { useState, useRef } from "react";
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image, Animated } from "react-native";
import { BarChart } from "react-native-chart-kit";
import Svg, { Path, G } from 'react-native-svg';
import styles from "./style";

export default function Home({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const pieData = [
    { name: "Coxinha", population: 400, color: "#006400" },
    { name: "Coca-Cola", population: 300, color: "#228B22" },
    { name: "Pizza", population: 300, color: "#32CD32" },
    { name: "Hambúrguer", population: 200, color: "#90EE90" },
  ];

  const salesData = [1500, 2000, 1700, 2200, 1900, 2100, 2300, 2200, 2500, 2400, 2600, 2700];
  const expensesData = [1200, 1800, 1600, 2000, 1800, 1900, 2100, 2000, 2300, 2200, 2400, 2500];
  const profitData = salesData.map((value, index) => value - expensesData[index]);

  const filters = [
    { name: "Vendas", color: "#4682B4" },
    { name: "Despesas", color: "#FF6347" },
    { name: "Lucro", color: "#32CD32" },
    { name: "Média", color: "#FFD700" },
  ];

  const AnimatedLegendItem = ({ color, text, fadeAnim }) => (
    <Animated.View style={[styles.legendItem, { opacity: fadeAnim }]}>
      <View style={[styles.legendColor, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{text}</Text>
    </Animated.View>
  );

  const [selectedFilter, setSelectedFilter] = useState("Vendas");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const getFilteredData = () => {
    switch (selectedFilter) {
      case "Despesas":
        return expensesData;
      case "Lucro":
        return profitData;
      case "Média":
        return salesData.map((value, index) => (value - expensesData[index]) / 2);
      default:
        return salesData;
    }
  };

  const filteredData = getFilteredData();
  const totalSales = salesData.reduce((a, b) => a + b, 0);
  const totalExpenses = expensesData.reduce((a, b) => a + b, 0);
  const totalProfit = profitData.reduce((a, b) => a + b, 0);

  const total = totalSales + totalExpenses + totalProfit;
  const salesPercentage = ((totalSales / total) * 100).toFixed(1);
  const expensesPercentage = ((totalExpenses / total) * 100).toFixed(1);
  const profitPercentage = ((totalProfit / total) * 100).toFixed(1);
  const averagePercentage = ((salesPercentage + expensesPercentage) / 2).toFixed(1);

  const getPieChart = () => {
    const total = pieData.reduce((sum, item) => sum + item.population, 0);

    return (
      <Svg width={screenWidth / 2 - 30} height={220} viewBox="0 0 220 220">
        <G x="10" y="20">
          {pieData.map((slice, index) => {
            const startAngle =
              index === 0
                ? 0
                : (pieData.slice(0, index).reduce((sum, item) => sum + item.population, 0) / total) * 360;
            const endAngle = (pieData.slice(0, index + 1).reduce((sum, item) => sum + item.population, 0) / total) * 360;

            const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
            const startX = 110 + 100 * Math.cos(((startAngle - 90) * Math.PI) / 180);
            const startY = 110 + 100 * Math.sin(((startAngle - 90) * Math.PI) / 180);
            const endX = 110 + 100 * Math.cos(((endAngle - 90) * Math.PI) / 180);
            const endY = 110 + 100 * Math.sin(((endAngle - 90) * Math.PI) / 180);

            const pathData = `M110,110 L${startX},${startY} A100,100 0 ${largeArcFlag},1 ${endX},${endY} Z`;

            return (
              <Path
                key={index}
                d={pathData}
                fill={selectedIndex === index ? "#ddd" : slice.color}
                onPress={() => {
                  setSelectedIndex(index);
                  setSelectedData(slice);
                  Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                  }).start();
                }}
              />
            );
          })}
        </G>
      </Svg>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate("Conta")}>
        <Image source={require("../../images/avatarFeirante.png")} style={styles.icon} />
        <Text style={styles.companyName}>Nome do comércio</Text>
      </TouchableOpacity>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Saldo do Mês</Text>
        <Text style={styles.balanceAmount}>Saldo: R$ 1.500,90</Text>
        <Text style={styles.balanceDate}>Sexta-Feira 17 de maio</Text>
      </View>
      <View style={styles.chartContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.chartBackground}>
            <BarChart
              data={{
                labels: ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [{ data: filteredData }],
              }}
              width={screenWidth * 2}
              height={250}
              yAxisLabel="R$"
              chartConfig={{
                backgroundGradientFrom: "black",
                backgroundGradientTo: "#black",
                decimalPlaces: 0,
                color: (opacity = 1) => {
                  switch (selectedFilter) {
                    case "Despesas":
                      return `rgba(255, 99, 71, 1)`;
                    case "Lucro":
                      return `rgba(50, 205, 50, 1)`;
                    case "Média":
                      return `rgba(255, 215, 0, 1)`;
                    default:
                      return `rgba(70, 130, 180, 1)`;
                  }
                },
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: { borderRadius: 16 },
                propsForBackgroundLines: { strokeDasharray: "" },
              }}
              style={styles.chart}
              fromZero={true}
              showBarTops={false}
              yAxisSuffix="R$"
            />
          </View>
        </ScrollView>
        <View style={styles.legendContainer}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.name}
              style={[
                styles.filterButton,
                { backgroundColor: filter.color },
                selectedFilter === filter.name && styles.selectedFilter,
              ]}
              onPress={() => setSelectedFilter(filter.name)}
            >
              <Text style={styles.filterText}>{filter.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.chartDescription}>
          <Text style={styles.chartDescription}>Vendas: {salesPercentage}%</Text>
          <Text style={styles.chartDescription}>Despesas: {expensesPercentage}%</Text>
          <Text style={styles.chartDescription}>Lucro: {profitPercentage}%</Text>
          {selectedFilter === "Média" && <Text style={styles.chartDescription}>Média: {averagePercentage}%</Text>}
        </View>
      </View>
      <View style={styles.chartContainer}>
        <View style={styles.pieChartContainer}>
          <Text style={styles.title}>Gráfico de Pizza Interativo</Text>
          {getPieChart()}
        </View>
        <View style={styles.pieLegendContainer}>
          {pieData.map((slice, index) => (
            <AnimatedLegendItem key={index} color={slice.color} text={slice.name} fadeAnim={fadeAnim} />
          ))}
        </View>
      </View>
      {selectedData && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{selectedData.name}</Text>
          <Text style={styles.infoText}>Quantidade: {selectedData.population}</Text>
        </View>
      )}
    </ScrollView>
  );
}