import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleWorkoutPress = () => {
    router.push('/training');
  };
  
  const handleCoachPress = () => {
    // Navigate to coaches screen (you can create this later)
    console.log('Navigate to coaches');
  };
  
  const handleNotificationPress = () => {
    router.push('/notifications');
  };

  const handleProgressPress = () => {
    router.push('/progress');
  };

  const handleFeedbackPress = () => {
    router.push('/feedback');
  };
  const handleNutritionPress = () => {
    router.push("/nutrition")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, AZIZ</Text>
          <Text style={styles.subtitle}>It's time to challenge your limits.</Text>
        </View>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>🔍</Text>
          <TouchableOpacity onPress={handleNotificationPress}>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <Text style={styles.icon}>👤</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.appTitle}>Fit Track</Text>
        
        <View style={styles.motivationCard}>
          <Text style={styles.motivationText}>
            No pain No gain Shut up and start train
          </Text>
        </View>

        <TouchableOpacity style={styles.workoutCard} onPress={handleWorkoutPress}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>💪</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Workouts</Text>
              <Text style={styles.cardSubtitle}>Starts your training now</Text>
            </View>
            <Text style={styles.hotLabel}>HOT</Text>
          </View>
          <Text style={styles.cardDescription}>
            Today focus: chest & arms{'\n'}8 exercise/45min
          </Text>
        </TouchableOpacity>

        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem} onPress={handleNotificationPress}>
            <Text style={styles.gridIcon}>🔔</Text>
            <Text style={styles.gridTitle}>Notification</Text>
            <Text style={styles.gridSubtitle}>Find out the last news</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={handleNutritionPress}>
            <Text style={styles.gridIcon}>🥗</Text>
            <Text style={styles.gridTitle}>Nutrition</Text>
            <Text style={styles.gridSubtitle}>Fuel your body</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={handleProgressPress}>
            <Text style={styles.gridIcon}>📈</Text>
            <Text style={styles.gridTitle}>Progress</Text>
            <Text style={styles.gridSubtitle}>Tracking your gains</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={handleFeedbackPress}>
            <Text style={styles.gridIcon}>💬</Text>
            <Text style={styles.gridTitle}>FeedBack</Text>
            <Text style={styles.gridSubtitle}>Leave us a feed back</Text>
          </TouchableOpacity>
        </View>
        
        {/* Coaches Card */}
        <TouchableOpacity style={styles.coachCard} onPress={handleCoachPress}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>👥</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Coaches</Text>
              <Text style={styles.cardSubtitle}>Choose the perfect coach</Text>
            </View>
          </View>
          <Text style={styles.cardDescription}>
            Coach on Duty{'\n'}Lisa M - Yoga & Flexibility
          </Text>
        </TouchableOpacity>

        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>This week Progress</Text>
          <View style={styles.progressStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Workouts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2.5K</Text>
              <Text style={styles.statLabel}>Calories</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Goals</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  motivationCard: {
    backgroundColor: '#333',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  motivationText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  workoutCard: {
    backgroundColor: '#1E90FF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  coachCard: {
    backgroundColor: '#1E90FF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardIconText: {
    fontSize: 20,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  hotLabel: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    color: 'white',
  },
  cardDescription: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#1E90FF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  gridIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  gridSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
    textAlign: 'center',
  },
  progressCard: {
    backgroundColor: '#1E90FF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
});