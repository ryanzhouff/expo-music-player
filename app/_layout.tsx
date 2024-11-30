import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

// const RootNavigation = () => {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
//     </Stack>
//   );
// };

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
