import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Item, items} from '../../constants/utils';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';
import {AllImages} from '../../../assets/images/index';

const ItemComponent = ({
  item,
  navigation,
}: {
  item: Item;
  navigation: NativeStackScreenProps<RootStackParamList>;
}) => {
  const tw = useTailwind();
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity
        style={item.type === 'View' ? styles.viewButton : styles.cancelButton}
        onPress={() => navigation.navigate('ChatDetail')}>
        <Text style={tw('text-center text-[#7f8790] font-normal text-sm')}>
          {item.type}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const MatchComponent = ({item}: {item: Item}) => (
  <View style={styles.itemContainer2}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
  </View>
);

export const ChatList = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 items-center bg-[#DF8CD1]')}>
      {/* <div className="w-6 h-6 font-normal text-sm text-[595f67] top-" /> */}
      <View style={tw('items-end h-[20%] relative')}>
        <TextInput
          placeholder="Search"
          style={tw(
            'my-auto bg-white w-80 rounded-3xl px-12 font-normal text-sm text-[#595f67]',
          )}
        />
        <Image
          source={AllImages.Search}
          style={tw('h-6 w-6 absolute top-[65px] left-4')}
        />
      </View>
      <View
        style={[
          tw('flex-1 bg-white w-full'),
          {borderTopRightRadius: 40, borderTopLeftRadius: 40},
        ]}>
        <View style={tw('p-2')}>
          <View style={tw('px-5 py-2')}>
            <Text style={tw('font-normal text-sm text-[#636363]')}>
              New Matches
            </Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={items}
            renderItem={({item}) => <MatchComponent item={item} />}
            keyExtractor={(item, index) => `list-item-${index}`}
          />
        </View>
        <View style={tw('px-7 pb-2')}>
          <Text style={tw('font-normal text-sm text-[#636363]')}>Messages</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({item}) => (
            <ItemComponent item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => `list-item-${index}`}
        />
      </View>
    </View>
  );
};
