import { defaultStyles } from '@/styles';
import { Text, View } from 'react-native';

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>歌曲列表页面</Text>
    </View>
  );
};

export default SongsScreen;
