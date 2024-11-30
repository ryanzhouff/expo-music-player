import { utilsStyles } from '@/styles';
import { FlatList, FlatListProps, View } from 'react-native';
import { Track } from 'react-native-track-player';
import TrackListItem from './TrackListItem';

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const ItemDivider = () => (
  <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
);

export default function TrackList({ tracks, ...flatListProps }: TrackListProps) {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ItemSeparatorComponent={ItemDivider}
      ListFooterComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        ></TrackListItem>
      )}
      {...flatListProps}
    />
  );
}
