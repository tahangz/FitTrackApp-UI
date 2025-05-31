import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="home" />
      <Stack.Screen name="training" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="feedback" />
      <Stack.Screen name="progress" />
      <Stack.Screen name="nutrition" />
    </Stack>
  );
}