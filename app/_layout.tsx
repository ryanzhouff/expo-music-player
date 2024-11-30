import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  // useSetupTrackPlayer({
  //   onLoad: handleTrackPlayerLoaded,
  // });

  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
