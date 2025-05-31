"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Image, StatusBar } from "react-native"
import { useRouter } from "expo-router"

export default function NutritionScreen() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All")

  const navigateToHome = () => {
    router.push("/home")
  }

  const navigateToNotifications = () => {
    router.push("/notifications")
  }

  const navigateToProgress = () => {
    router.push("/progress")
  }

  const navigateToFeedback = () => {
    router.push("/feedback")
  }

  const navigateToWorkout = () => {
    router.push("/training")
  }

  const filters = ["All", "Protein", "Fats", "Carbs"]

  // Sample nutrition data
  const nutritionItems = [
    {
      id: 1,
      name: "Chicken Breast",
      serving: "100g",
      calories: "165 kcal",
      image: require("../assets/chicken.png"),
    },
    {
      id: 2,
      name: "Chicken Breast",
      serving: "100g",
      calories: "165 kcal",
      image: require("../assets/chicken.png"),
    },
    {
      id: 3,
      name: "Chicken Breast",
      serving: "100g",
      calories: "165 kcal",
      image: require("../assets/chicken.png"),
    },
    {
      id: 4,
      name: "Chicken Breast",
      serving: "100g",
      calories: "165 kcal",
      image: require("../assets/chicken.png"),
    },
    {
      id: 5,
      name: "Chicken Breast",
      serving: "100g",
      calories: "165 kcal",
      image: require("../assets/chicken.png"),
    },
  ]

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter)
  }

  const handleFoodItemPress = (item) => {
    console.log("Food item pressed:", item.name)
    // Navigate to food details screen or add to tracking
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Nutrition</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Subtitle */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Search for foods and track your nutrition</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for foods and track your nutrition"
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterTab, selectedFilter === filter && styles.activeFilterTab]}
            onPress={() => handleFilterPress(filter)}
          >
            <Text style={[styles.filterText, selectedFilter === filter && styles.activeFilterText]}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Food Items List */}
      <ScrollView style={styles.foodList} showsVerticalScrollIndicator={false}>
        {nutritionItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.foodItem} onPress={() => handleFoodItemPress(item)}>
            <Image source={item.image} style={styles.foodImage} />
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodServing}>{item.serving}</Text>
            </View>
            <View style={styles.caloriesContainer}>
              <Text style={styles.caloriesText}>{item.calories}</Text>
              <Text style={styles.perServingText}>per serving</Text>
            </View>
          </TouchableOpacity>
        ))}
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

        <TouchableOpacity style={styles.navItem} onPress={navigateToWorkout}>
          <Text style={styles.navIcon}>💪</Text>
          <Text style={styles.navLabel}>Workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backButton: {
    fontSize: 24,
    color: "#1E90FF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  placeholder: {
    width: 24,
  },
  subtitleContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#999",
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#111",
  },
  searchIcon: {
    fontSize: 16,
    color: "#666",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#333",
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 4,
  },
  filterTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 20,
  },
  activeFilterTab: {
    backgroundColor: "white",
  },
  filterText: {
    fontSize: 16,
    color: "#999",
    fontWeight: "500",
  },
  activeFilterText: {
    color: "#000",
    fontWeight: "bold",
  },
  foodList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E90FF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  foodServing: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
  },
  caloriesContainer: {
    alignItems: "flex-end",
  },
  caloriesText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 2,
  },
  perServingText: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
    backgroundColor: "#111",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    fontSize: 20,
    color: "#666",
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: "#666",
  },
})
