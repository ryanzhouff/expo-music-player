import library from '@/assets/data/library.json';
import TrackList from '@/components/TrackList';
import { screenPadding } from '@/constants/tokens';
import { trackTitleFilter } from '@/helpers/filter';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { defaultStyles } from '@/styles';
import { useMemo } from 'react';
import { View } from 'react-native';

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: '搜索歌曲',
    },
  });

  const filteredTrack = useMemo(() => {
    if (!search) return library;

    return library.filter(trackTitleFilter(search));
  }, [search]);

  return (
    <View style={{ ...defaultStyles.container }}>
      <TrackList
        tracks={filteredTrack}
        style={{ paddingHorizontal: screenPadding.horizontal }}
        contentInsetAdjustmentBehavior="automatic"
      />
    </View>
  );
};

export default SongsScreen;
