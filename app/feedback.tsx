import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function FeedbackScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('give'); // 'give' or 'your'
  const [rating, setRating] = useState(4);
  const [selectedAspects, setSelectedAspects] = useState(['Workout Tracking']);
  const [feedbackText, setFeedbackText] = useState('');

  const aspects = [
    'Workout Tracking',
    'Nutrition information',
    'Progress tracking',
    'User interface',
    'Coaching & training'
  ];

  const previousFeedbacks = [
    {
      id: 1,
      category: 'App Performance',
      text: 'Help us improve your fitness experience',
      rating: 4,
      date: 'April 15, 2025'
    },
    {
      id: 2,
      category: 'App Performance',
      text: 'Help us improve your fitness experience',
      rating: 4,
      date: 'April 15, 2025'
    },
    {
      id: 3,
      category: 'App Performance',
      text: 'Help us improve your fitness experience',
      rating: 4,
      date: 'April 15, 2025'
    },
    {
      id: 4,
      category: 'App Performance',
      text: 'Help us improve your fitness experience',
      rating: 4,
      date: 'April 15, 2025'
    },
    {
      id: 5,
      category: 'App Performance',
      text: 'Help us improve your fitness experience',
      rating: 4,
      date: 'April 15, 2025'
    }
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
  
  const navigateToWorkout = () => {
    router.push('/training');
  };

  const handleRatingPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleAspectToggle = (aspect) => {
    if (selectedAspects.includes(aspect)) {
      setSelectedAspects(selectedAspects.filter(item => item !== aspect));
    } else {
      setSelectedAspects([...selectedAspects, aspect]);
    }
  };

  const renderStars = (currentRating, isInteractive = false) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={isInteractive ? () => handleRatingPress(star) : null}
            disabled={!isInteractive}
          >
            <Text style={[
              styles.star,
              star <= currentRating ? styles.starFilled : styles.starEmpty
            ]}>
              ★
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>FeedBacks</Text>
        <Text style={styles.subtitle}>Help us improve your fitness experience</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'give' && styles.activeTab]}
          onPress={() => setActiveTab('give')}
        >
          <Text style={[styles.tabText, activeTab === 'give' && styles.activeTabText]}>
            Give FeedBack
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'your' && styles.activeTab]}
          onPress={() => setActiveTab('your')}
        >
          <Text style={[styles.tabText, activeTab === 'your' && styles.activeTabText]}>
            Your FeedBack
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'give' ? (
          // Give Feedback Tab
          <View style={styles.giveFeedbackContainer}>
            {/* Rate Your Experience */}
            <View style={styles.ratingSection}>
              <Text style={styles.sectionTitle}>Rate Your Experience</Text>
              <Text style={styles.sectionSubtitle}>Share your thoughts about Fit Track</Text>
              
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingQuestion}>How would you rate your overall experience ?</Text>
                {renderStars(rating, true)}
              </View>
            </View>

            {/* App Aspects */}
            <View style={styles.aspectsSection}>
              <Text style={styles.aspectsTitle}>What aspects of the app do you like the most ?</Text>
              
              {aspects.map((aspect, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.aspectItem,
                    selectedAspects.includes(aspect) && styles.selectedAspectItem
                  ]}
                  onPress={() => handleAspectToggle(aspect)}
                >
                  <View style={[
                    styles.aspectRadio,
                    selectedAspects.includes(aspect) && styles.selectedAspectRadio
                  ]}>
                    {selectedAspects.includes(aspect) && <View style={styles.aspectRadioInner} />}
                  </View>
                  <Text style={[
                    styles.aspectText,
                    selectedAspects.includes(aspect) && styles.selectedAspectText
                  ]}>
                    {aspect}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Text Feedback */}
            <View style={styles.textFeedbackSection}>
              <Text style={styles.textFeedbackTitle}>What aspects of the app do you like the most ?</Text>
              <TextInput
                style={styles.textFeedbackInput}
                placeholder="Tell us what you think about the app or how we can improve it ?"
                placeholderTextColor="#999"
                multiline
                numberOfLines={6}
                value={feedbackText}
                onChangeText={setFeedbackText}
                textAlignVertical="top"
              />
            </View>
          </View>
        ) : (
          // Your Feedback Tab
          <View style={styles.yourFeedbackContainer}>
            <View style={styles.feedbackHeader}>
              <Text style={styles.feedbackHeaderTitle}>Your Previous Feedback</Text>
              <Text style={styles.feedbackHeaderSubtitle}>History of feedback you've provided</Text>
            </View>

            {previousFeedbacks.map((feedback) => (
              <View key={feedback.id} style={styles.feedbackItem}>
                <View style={styles.feedbackItemHeader}>
                  <View style={styles.feedbackCategory}>
                    <View style={styles.categoryDot} />
                    <Text style={styles.categoryText}>{feedback.category}</Text>
                  </View>
                  {renderStars(feedback.rating)}
                </View>
                
                <Text style={styles.feedbackItemText}>{feedback.text}</Text>
                
                <View style={styles.feedbackItemFooter}>
                  <View style={styles.submittedIndicator} />
                  <Text style={styles.submittedText}>Submitted on {feedback.date}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
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
        
        <TouchableOpacity style={styles.navItem} onPress={() => {}}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>💬</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Feedback</Text>
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
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#1E90FF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  activeTabText: {
    color: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  // Give Feedback Styles
  giveFeedbackContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  ratingSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  ratingQuestion: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 0.01,
  },
  star: {
    fontSize: 32,
  },
  starFilled: {
    color: '#FFD700',
  },
  starEmpty: {
    color: '#ddd',
  },
  aspectsSection: {
    marginBottom: 25,
  },
  aspectsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  aspectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedAspectItem: {
    backgroundColor: '#2C5282',
  },
  aspectRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedAspectRadio: {
    borderColor: '#1E90FF',
  },
  aspectRadioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1E90FF',
  },
  aspectText: {
    fontSize: 16,
    color: '#333',
  },
  selectedAspectText: {
    color: 'white',
  },
  textFeedbackSection: {
    marginBottom: 20,
  },
  textFeedbackTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  textFeedbackInput: {
    backgroundColor: '#2C5282',
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    color: 'white',
    minHeight: 120,
  },
  // Your Feedback Styles
  yourFeedbackContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  feedbackHeader: {
    marginBottom: 20,
  },
  feedbackHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  feedbackHeaderSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  feedbackItem: {
    backgroundColor: '#2C5282',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
  },
  feedbackItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  feedbackCategory: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4AFF4A',
    marginRight: 8,
  },
  categoryText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  feedbackItemText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  feedbackItemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submittedIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'white',
    marginRight: 8,
  },
  submittedText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
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