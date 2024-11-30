import { defaultStyles } from '@/styles';
import { Text, View } from 'react-native';

const ArtistsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>歌手列表</Text>
    </View>
  );
};

export default ArtistsScreen;
