import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      
      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.appName}>FitTrack</Text>
        <Text style={styles.tagline}>Track Your Fitness Journey</Text>
      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#000',
  },
  time: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    width: 3,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  bar1: { height: 4 },
  bar2: { height: 6 },
  bar3: { height: 8 },
  bar4: { height: 10 },
  wifiIcon: {
    width: 18,
    height: 12,
    position: 'relative',
  },
  wifiArc1: {
    position: 'absolute',
    bottom: 0,
    left: 9,
    width: 2,
    height: 2,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  wifiArc2: {
    position: 'absolute',
    bottom: 2,
    left: 6,
    width: 8,
    height: 4,
    borderWidth: 1,
    borderColor: 'white',
    borderBottomWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  wifiArc3: {
    position: 'absolute',
    bottom: 4,
    left: 3,
    width: 14,
    height: 7,
    borderWidth: 1,
    borderColor: 'white',
    borderBottomWidth: 0,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  wifiDot: {
    position: 'absolute',
    bottom: 0,
    left: 8,
    width: 2,
    height: 2,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  batteryIcon: {
    width: 24,
    height: 12,
    position: 'relative',
  },
  batteryBody: {
    width: 20,
    height: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    position: 'absolute',
    top: 1,
    left: 0,
  },
  batteryTip: {
    width: 2,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 1,
    position: 'absolute',
    top: 3,
    right: 0,
  },
  batteryFill: {
    width: 16,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 1,
    position: 'absolute',
    top: 3,
    left: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 10,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
});