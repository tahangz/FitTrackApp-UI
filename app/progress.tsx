import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Svg, Path, Circle, Line, Text as SvgText } from 'react-native-svg';

export default function ProgressScreen() {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly');

  const navigateToHome = () => {
    router.push('/home');
  };
  
  const navigateToNotifications = () => {
    router.push('/notifications');
  };
  
  const navigateToFeedback = () => {
    router.push('/feedback');
  };
  
  const navigateToWorkout = () => {
    router.push('/training');
  };

  // Chart data points for the week - calorie intake (cyan line)
  const calorieData = [
    { day: 'Sun', value: 400, x: 0 },
    { day: 'Mon', value: 800, x: 1 },
    { day: 'Tue', value: 600, x: 2 },
    { day: 'Wed', value: 1000, x: 3 },
    { day: 'Thu', value: 1800, x: 4 },
    { day: 'Fri', value: 1000, x: 5 },
    { day: 'Sat', value: 900, x: 6 },
  ];

  // Second line data (white line)
  const secondLineData = [
    { day: 'Sun', value: 50, x: 0 },
    { day: 'Mon', value: 200, x: 1 },
    { day: 'Tue', value: 400, x: 2 },
    { day: 'Wed', value: 200, x: 3 },
    { day: 'Thu', value: 600, x: 4 },
    { day: 'Fri', value: 400, x: 5 },
    { day: 'Sat', value: 350, x: 6 },
  ];

  const progressMetrics = [
    {
      id: 1,
      title: 'Workout Completion',
      subtitle: 'Workout Plan Completion',
      percentage: 92,
      color: '#00CED1',
    },
    {
      id: 2,
      title: 'Calories Burned Goal',
      subtitle: 'Calories Burned',
      percentage: 68,
      color: '#FF8C00',
    },
    {
      id: 3,
      title: 'Training Consistency',
      subtitle: 'Training Days This Month',
      percentage: 75,
      color: '#FF69B4',
    },
  ];

  const renderProgressCircle = (percentage, color) => {
    const radius = 25;
    const strokeWidth = 4;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <View style={styles.progressCircleContainer}>
        <View style={[styles.progressCircle, { borderColor: color }]}>
          <View style={[styles.progressFill, { 
            borderColor: color,
            transform: [{ rotate: `${(percentage / 100) * 360}deg` }]
          }]} />
          <Text style={styles.progressPercentage}>{percentage}%</Text>
        </View>
      </View>
    );
  };

  const renderChart = () => {
    const chartHeight = 280;
    const chartWidth = 300;
    const maxValue = 2400;
    const minValue = 0;
    const padding = { top: 20, right: 20, bottom: 40, left: 40 };
    const graphHeight = chartHeight - padding.top - padding.bottom;
    const graphWidth = chartWidth - padding.left - padding.right;
    
    // Y-axis values
    const yAxisValues = [2400, 1800, 1000, 600, 50, 10];
    
    // Calculate positions for data points
    const getY = (value) => {
      return graphHeight - ((value - minValue) / (maxValue - minValue)) * graphHeight + padding.top;
    };
    
    const getX = (index) => {
      return (index / (calorieData.length - 1)) * graphWidth + padding.left;
    };
    
    // Create SVG path for the calorie line (cyan)
    let caloriePath = `M ${getX(0)} ${getY(calorieData[0].value)}`;
    for (let i = 1; i < calorieData.length; i++) {
      // Use bezier curves for smooth lines
      const x1 = getX(i - 1);
      const y1 = getY(calorieData[i - 1].value);
      const x2 = getX(i);
      const y2 = getY(calorieData[i].value);
      
      // Control points for the curve
      const cpx1 = x1 + (x2 - x1) / 2;
      const cpy1 = y1;
      const cpx2 = x1 + (x2 - x1) / 2;
      const cpy2 = y2;
      
      caloriePath += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${x2} ${y2}`;
    }
    
    // Create SVG path for the second line (white)
    let secondPath = `M ${getX(0)} ${getY(secondLineData[0].value)}`;
    for (let i = 1; i < secondLineData.length; i++) {
      // Use bezier curves for smooth lines
      const x1 = getX(i - 1);
      const y1 = getY(secondLineData[i - 1].value);
      const x2 = getX(i);
      const y2 = getY(secondLineData[i].value);
      
      // Control points for the curve
      const cpx1 = x1 + (x2 - x1) / 2;
      const cpy1 = y1;
      const cpx2 = x1 + (x2 - x1) / 2;
      const cpy2 = y2;
      
      secondPath += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${x2} ${y2}`;
    }
    
    // Highlight point (Thursday peak)
    const highlightX = getX(4); // Thursday is index 4
    const highlightY = getY(calorieData[4].value);

    return (
      <View style={styles.chartContainer}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartTitle}>Weekly Calorie Intake</Text>
          <TouchableOpacity style={styles.periodSelector}>
            <Text style={styles.periodText}>Weekly</Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.chartContent}>
          {/* Y-axis labels */}
          <View style={styles.yAxisLabels}>
            {yAxisValues.map((value, index) => (
              <Text key={index} style={styles.yAxisLabel}>{value}</Text>
            ))}
          </View>
          
          {/* Chart SVG */}
          <Svg height={chartHeight} width={chartWidth - padding.left}>
            {/* Grid lines */}
            {yAxisValues.map((value, index) => (
              <Line
                key={`grid-${index}`}
                x1={0}
                y1={getY(value)}
                x2={graphWidth}
                y2={getY(value)}
                stroke="#333"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
            ))}
            
            {/* Calorie line (cyan) */}
            <Path
              d={caloriePath}
              fill="none"
              stroke="#00CED1"
              strokeWidth="3"
            />
            
            {/* Second line (white) */}
            <Path
              d={secondPath}
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
            
            {/* Vertical indicator line */}
            <Line
              x1={highlightX}
              y1={getY(10)}
              x2={highlightX}
              y2={highlightY}
              stroke="#FF8C00"
              strokeWidth="2"
            />
            
            {/* Highlight point */}
            <Circle
              cx={highlightX}
              cy={highlightY}
              r="8"
              fill="white"
              stroke="#FF8C00"
              strokeWidth="3"
            />
          </Svg>
        </View>
        
        {/* X-axis labels */}
        <View style={styles.xAxisLabels}>
          {calorieData.map((item, index) => (
            <Text key={index} style={styles.xAxisLabel}>{item.day}</Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Progress</Text>
        <Text style={styles.subtitle}>Monitor your fitness journey over time</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Chart */}
        {renderChart()}
        
        {/* Progress Metrics */}
        <View style={styles.metricsContainer}>
          {progressMetrics.map((metric) => (
            <TouchableOpacity key={metric.id} style={styles.metricItem}>
              {renderProgressCircle(metric.percentage, metric.color)}
              <View style={styles.metricInfo}>
                <Text style={[styles.metricTitle, { color: metric.color }]}>{metric.title}</Text>
                <Text style={styles.metricSubtitle}>{metric.subtitle}</Text>
              </View>
              <Text style={styles.metricArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToNotifications}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navLabel}>Notification</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => {}}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>📈</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Progress</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToFeedback}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navLabel}>Feedback</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToWorkout}>
          <Text style={styles.navIcon}>💪</Text>
          <Text style={styles.navLabel}>Workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  chartContainer: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    backgroundColor: '#000', // Changed to pure black
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#00CED1',
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  periodText: {
    color: 'white',
    fontSize: 14,
    marginRight: 8,
  },
  dropdownArrow: {
    color: 'white',
    fontSize: 10,
  },
  chartContent: {
    flexDirection: 'row',
    height: 280,
  },
  yAxisLabels: {
    justifyContent: 'space-between',
    paddingRight: 10,
    height: 280,
  },
  yAxisLabel: {
    color: '#666',
    fontSize: 12,
    textAlign: 'right',
    height: 20,
  },
  xAxisLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 20,
    marginTop: 10,
  },
  xAxisLabel: {
    color: '#666',
    fontSize: 14,
  },
  metricsContainer: {
    marginBottom: 20,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    borderStyle: 'dotted',
  },
  progressCircleContainer: {
    marginRight: 20,
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#111',
  },
  progressFill: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#00CED1',
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  metricInfo: {
    flex: 1,
  },
  metricTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  metricSubtitle: {
    fontSize: 14,
    color: '#999',
  },
  metricArrow: {
    fontSize: 20,
    color: '#666',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#333',
    backgroundColor: '#111',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    color: '#666',
    marginBottom: 4,
  },
  activeNavIcon: {
    color: '#1E90FF',
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
  },
  activeNavLabel: {
    color: '#1E90FF',
  },
});