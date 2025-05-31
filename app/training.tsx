import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function TrainingScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample attendance data for December 2016
  const attendanceDates = [4, 6, 7, 9, 12, 13, 14, 18, 19, 21, 22];
  
  // Calendar data for December 2016
  const calendarDays = [
    { date: 27, isCurrentMonth: false },
    { date: 28, isCurrentMonth: false },
    { date: 29, isCurrentMonth: false },
    { date: 30, isCurrentMonth: false },
    { date: 1, isCurrentMonth: true },
    { date: 2, isCurrentMonth: true },
    { date: 3, isCurrentMonth: true },
    { date: 4, isCurrentMonth: true },
    { date: 5, isCurrentMonth: true },
    { date: 6, isCurrentMonth: true },
    { date: 7, isCurrentMonth: true },
    { date: 8, isCurrentMonth: true },
    { date: 9, isCurrentMonth: true },
    { date: 10, isCurrentMonth: true },
    { date: 11, isCurrentMonth: true },
    { date: 12, isCurrentMonth: true },
    { date: 13, isCurrentMonth: true },
    { date: 14, isCurrentMonth: true },
    { date: 15, isCurrentMonth: true },
    { date: 16, isCurrentMonth: true },
    { date: 17, isCurrentMonth: true },
    { date: 18, isCurrentMonth: true },
    { date: 19, isCurrentMonth: true },
    { date: 20, isCurrentMonth: true },
    { date: 21, isCurrentMonth: true },
    { date: 22, isCurrentMonth: true },
    { date: 23, isCurrentMonth: true },
    { date: 24, isCurrentMonth: true },
    { date: 25, isCurrentMonth: true },
    { date: 26, isCurrentMonth: true },
    { date: 27, isCurrentMonth: true },
    { date: 28, isCurrentMonth: true },
    { date: 29, isCurrentMonth: true },
    { date: 30, isCurrentMonth: true },
    { date: 31, isCurrentMonth: true },
  ];

  const navigateToHome = () => {
    router.push('/home');
  };
  
  const navigateToNotifications = () => {
    router.push('/notifications');
  };
  
  const navigateToProgress = () => {
    router.push('/progress');
  };
  
  const navigateToFeedback = () => {
    router.push('/feedback');
  };

  const isAttendanceDate = (date) => {
    return attendanceDates.includes(date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Training</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        {/* Training Tracking Component */}
        <View style={styles.trackingContainer}>
          <View style={styles.trackingHeader}>
            <Text style={styles.trackingTitle}>Training Tracking</Text>
            <Text style={styles.trackingSubtitle}>Track your training for this month</Text>
          </View>

          {/* User Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <View style={styles.profileImage}>
                <Text style={styles.profileInitials}>AK</Text>
              </View>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Aziz KACEM</Text>
              <Text style={styles.profilePhone}>Phone: +216 94 359 613</Text>
            </View>
          </View>

          {/* Calendar Section */}
          <View style={styles.calendarSection}>
            <Text style={styles.attendanceTitle}>Attendance This Month</Text>
            
            <View style={styles.calendarContainer}>
              <View style={styles.calendarHeader}>
                <Text style={styles.monthYear}>December 2024</Text>
                <View style={styles.calendarControls}>
                  <View style={styles.controlDot} />
                  <View style={styles.controlDot} />
                </View>
              </View>

              <View style={styles.weekDaysContainer}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <View key={index} style={styles.weekDayContainer}>
                    <Text style={styles.weekDay}>{day}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.calendarGrid}>
                {calendarDays.map((day, index) => (
                  <View key={index} style={styles.calendarDayContainer}>
                    <TouchableOpacity
                      style={[
                        styles.calendarDay,
                        isAttendanceDate(day.date) && day.isCurrentMonth && styles.attendanceDay
                      ]}
                      onPress={() => setSelectedDate(day.date)}
                    >
                      <Text style={[
                        styles.calendarDayText,
                        !day.isCurrentMonth && styles.inactiveDayText,
                        isAttendanceDate(day.date) && day.isCurrentMonth && styles.attendanceDayText
                      ]}>
                        {day.date}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Payment Cards */}
          <View style={styles.paymentSection}>
            <View style={styles.paymentCard}>
              <Text style={styles.paymentLabel}>Previous Payment</Text>
              <Text style={styles.paymentDate}>Monday</Text>
              <Text style={styles.paymentDate}>September-23th</Text>
            </View>
            
            <View style={styles.paymentCard}>
              <Text style={styles.paymentLabel}>Next Payment</Text>
              <Text style={styles.paymentDate}>Sunday</Text>
              <Text style={styles.paymentDate}>December-23th</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Today's Workout</Text>
        
        <View style={styles.workoutCard}>
          <Text style={styles.workoutTitle}>Chest & Arms</Text>
          <Text style={styles.workoutDuration}>45 minutes • 8 exercises</Text>
          
          <View style={styles.exerciseList}>
            <View style={styles.exerciseItem}>
              <Text style={styles.exerciseName}>Push-ups</Text>
              <Text style={styles.exerciseReps}>3 sets × 15 reps</Text>
            </View>
            
            <View style={styles.exerciseItem}>
              <Text style={styles.exerciseName}>Bench Press</Text>
              <Text style={styles.exerciseReps}>4 sets × 12 reps</Text>
            </View>
            
            <View style={styles.exerciseItem}>
              <Text style={styles.exerciseName}>Bicep Curls</Text>
              <Text style={styles.exerciseReps}>3 sets × 15 reps</Text>
            </View>
            
            <View style={styles.exerciseItem}>
              <Text style={styles.exerciseName}>Tricep Dips</Text>
              <Text style={styles.exerciseReps}>3 sets × 12 reps</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Workout</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Quick Workouts</Text>
        
        <View style={styles.quickWorkouts}>
          <TouchableOpacity style={styles.quickWorkoutCard}>
            <Text style={styles.quickWorkoutTitle}>HIIT</Text>
            <Text style={styles.quickWorkoutDuration}>20 min</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickWorkoutCard}>
            <Text style={styles.quickWorkoutTitle}>Cardio</Text>
            <Text style={styles.quickWorkoutDuration}>30 min</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickWorkoutCard}>
            <Text style={styles.quickWorkoutTitle}>Yoga</Text>
            <Text style={styles.quickWorkoutDuration}>25 min</Text>
          </TouchableOpacity>
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
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToProgress}>
          <Text style={styles.navIcon}>📈</Text>
          <Text style={styles.navLabel}>Progress</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToFeedback}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navLabel}>Feedback</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => {}}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>💪</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Workout</Text>
        </TouchableOpacity>
      </View>
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
  backButton: {
    fontSize: 24,
    color: '#1E90FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  // Training Tracking Styles - Updated to black background
  trackingContainer: {
    backgroundColor: '#000', // Changed from '#111' to '#000'
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  trackingHeader: {
    marginBottom: 20,
  },
  trackingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  trackingSubtitle: {
    fontSize: 16,
    color: '#999',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImageContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4A9EFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  profilePhone: {
    fontSize: 14,
    color: '#999',
  },
  calendarSection: {
    marginBottom: 20,
  },
  attendanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  calendarContainer: {
    backgroundColor: '#1E90FF',
    borderRadius: 12,
    padding: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  monthYear: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Changed to black to match the image
  },
  calendarControls: {
    flexDirection: 'row',
    gap: 10,
  },
  controlDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  weekDayContainer: {
    flex: 1,
    alignItems: 'center',
  },
  weekDay: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDayContainer: {
    width: '14.28%', // 100% / 7 days
    alignItems: 'center',
    marginBottom: 15,
  },
  calendarDay: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  attendanceDay: {
    backgroundColor: '#4AFF4A', // Bright green for attendance
  },
  calendarDayText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  attendanceDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inactiveDayText: {
    color: 'rgba(255,255,255,0.6)', // Lighter for previous/next month dates
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  paymentCard: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#4A9EFF',
  },
  paymentLabel: {
    fontSize: 14,
    color: '#4A9EFF',
    marginBottom: 8,
  },
  paymentDate: {
    fontSize: 14,
    color: 'white',
    marginBottom: 2,
  },
  // Existing styles
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  workoutCard: {
    backgroundColor: '#1E90FF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  workoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  workoutDuration: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 20,
  },
  exerciseList: {
    marginBottom: 20,
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
  },
  exerciseName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  exerciseReps: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  startButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  quickWorkouts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickWorkoutCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
  },
  quickWorkoutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  quickWorkoutDuration: {
    fontSize: 14,
    color: '#999',
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