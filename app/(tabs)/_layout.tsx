import { colors, fontSize } from '@/constants/tokens';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: 500,
        },
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8,
        },
        tabBarBackground() {
          return (
            <BlurView
              intensity={95}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: 'hidden',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          );
        },
      }}
    >
      <Tabs.Screen name="favorites" options={{ title: '收藏' }} />
      <Tabs.Screen name="playlists" options={{ title: '播放列表' }} />
      <Tabs.Screen name="songs" options={{ title: '歌曲' }} />
      <Tabs.Screen name="artists" options={{ title: '歌手' }} />
    </Tabs>
  );
}
