import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotificationsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample notification data distributed across 5 pages (5 notifications per page)
  const allNotifications = [
    // Page 1 notifications
    { id: 1, title: "Time to Crush Your Workout!", message: "Don't forget leg day — your progress starts today.", read: false, page: 1 },
    { id: 2, title: "New Personal Record!", message: "You've beaten your previous best in bench press!", read: false, page: 1 },
    { id: 3, title: "Hydration Reminder", message: "Remember to drink water during your workout session.", read: true, page: 1 },
    { id: 4, title: "Rest Day Suggestion", message: "Consider taking a rest day to let your muscles recover.", read: false, page: 1 },
    { id: 5, title: "Morning Motivation", message: "Start your day with a positive mindset and energy!", read: false, page: 1 },
    
    // Page 2 notifications
    { id: 6, title: "Weekly Goal Achieved!", message: "Congratulations! You've completed your weekly fitness goal.", read: false, page: 2 },
    { id: 7, title: "New Workout Available", message: "Check out the new HIIT workout in your training plan.", read: false, page: 2 },
    { id: 8, title: "Nutrition Tip", message: "Eating protein after workout helps muscle recovery.", read: true, page: 2 },
    { id: 9, title: "Workout Reminder", message: "Your scheduled workout starts in 30 minutes.", read: false, page: 2 },
    { id: 10, title: "Calorie Milestone", message: "You've burned 1000 calories this week. Amazing!", read: false, page: 2 },
    
    // Page 3 notifications
    { id: 11, title: "Progress Update", message: "You've burned 500 calories this week. Keep it up!", read: false, page: 3 },
    { id: 12, title: "Coach Message", message: "Lisa M has sent you a personalized workout tip.", read: false, page: 3 },
    { id: 13, title: "Challenge Invitation", message: "Join the 30-day fitness challenge with your friends.", read: true, page: 3 },
    { id: 14, title: "Equipment Maintenance", message: "Time to check and maintain your home gym equipment.", read: false, page: 3 },
    { id: 15, title: "Flexibility Focus", message: "Don't forget to include stretching in your routine.", read: false, page: 3 },
    
    // Page 4 notifications
    { id: 16, title: "Sleep Quality Reminder", message: "Good sleep is essential for muscle recovery and growth.", read: false, page: 4 },
    { id: 17, title: "Workout Streak", message: "Amazing! You're on a 7-day workout streak.", read: false, page: 4 },
    { id: 18, title: "Form Check Reminder", message: "Remember to maintain proper form during exercises.", read: true, page: 4 },
    { id: 19, title: "Supplement Reminder", message: "Don't forget to take your post-workout supplements.", read: false, page: 4 },
    { id: 20, title: "Heart Rate Zone", message: "Try to maintain your target heart rate during cardio.", read: false, page: 4 },
    
    // Page 5 notifications
    { id: 21, title: "Monthly Report Ready", message: "Your fitness progress report for this month is available.", read: false, page: 5 },
    { id: 22, title: "New Feature Alert", message: "Try our new workout intensity tracker feature.", read: false, page: 5 },
    { id: 23, title: "Community Update", message: "See what your fitness community has been up to.", read: true, page: 5 },
    { id: 24, title: "Motivation Quote", message: "Success is the sum of small efforts repeated daily.", read: false, page: 5 },
    { id: 25, title: "Weekend Challenge", message: "Special weekend workout challenge is now available!", read: false, page: 5 },
  ];
  
  // Filter notifications for current page
  const currentNotifications = allNotifications.filter(notification => notification.page === currentPage);
  
  const markAllAsRead = () => {
    console.log('Mark all as read');
  };
  
  const navigateToHome = () => {
    router.push('/home');
  };
  
  const navigateToProgress = () => {
    router.push('/progress');
  };
  
  const navigateToFeedback = () => {
    router.push('/feedback');
  };
  
  const navigateToWorkout = () => {
    router.push('/training');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity onPress={markAllAsRead}>
          <Text style={styles.markAllText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchLabel}>Search for a specific notification</Text>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search notification"
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      
      {/* Notifications List */}
      <ScrollView style={styles.notificationsList}>
        {currentNotifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
            </View>
            <View style={styles.bellIconContainer}>
              <View style={styles.bellIcon}>
                <Text style={styles.bellIconText}>🔔</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      
      {/* Pagination */}
      <View style={styles.pagination}>
        <TouchableOpacity 
          style={[styles.paginationArrow, currentPage === 1 && styles.disabledArrow]} 
          onPress={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <Text style={[styles.paginationArrowText, currentPage === 1 && styles.disabledText]}>◀</Text>
        </TouchableOpacity>
        
        <View style={styles.paginationNumbers}>
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <TouchableOpacity 
              key={pageNumber}
              style={[styles.pageNumber, currentPage === pageNumber && styles.activePage]}
              onPress={() => handlePageChange(pageNumber)}
            >
              <Text style={[styles.pageNumberText, currentPage === pageNumber && styles.activePageText]}>
                {pageNumber}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity 
          style={[styles.paginationArrow, currentPage === 5 && styles.disabledArrow]} 
          onPress={goToNextPage}
          disabled={currentPage === 5}
        >
          <Text style={[styles.paginationArrowText, currentPage === 5 && styles.disabledText]}>▶</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => {}}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>🔔</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Notification</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={navigateToProgress}>
          <Text style={styles.navIcon}>📈</Text>
          <Text style={styles.navLabel}>Progress</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  markAllText: {
    fontSize: 16,
    color: '#1E90FF',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  searchLabel: {
    color: '#999',
    fontSize: 14,
    marginBottom: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'white',
    fontSize: 16,
  },
  notificationsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  notificationContent: {
    flex: 1,
    paddingRight: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#999',
  },
  bellIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#1E90FF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIconText: {
    fontSize: 18,
    color: 'white',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  paginationArrow: {
    width: 30,
    height: 30,
    backgroundColor: '#333',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledArrow: {
    backgroundColor: '#222',
  },
  paginationArrowText: {
    color: 'white',
    fontSize: 14,
  },
  disabledText: {
    color: '#555',
  },
  paginationNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pageNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  activePage: {
    backgroundColor: '#1E90FF',
  },
  pageNumberText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
  activePageText: {
    color: 'white',
    fontWeight: 'bold',
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