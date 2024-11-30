import { colors, fontSize } from '@/constants/tokens';
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: '500',
        },
        tabBarStyle: {
          position: 'absolute',
          paddingTop: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: '收藏',
          tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          tabBarLabel: '播放列表',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-play" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: '歌曲',
          tabBarIcon: ({ color }) => <Ionicons name="musical-note-sharp" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          tabBarLabel: '歌手',
          tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}
