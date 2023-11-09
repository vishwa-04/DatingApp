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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

export const ChatList = ({navigation}:NativeStackScreenProps<RootStackParamList>) => {
  const ItemComponent = ({item}: {item: Item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity
        style={item.type === 'View' ? styles.viewButton : styles.cancelButton}
        onPress={() => navigation.navigate('ChatDetail')}>
        <Text>{item.type}</Text>
      </TouchableOpacity>
    </View>
  );
  const MatchComponent = ({item}: {item: Item}) => (
    <View style={styles.itemContainer2}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 items-center bg-[#DF8CD1]')}>
      <View style={tw(' items-center h-[20%]')}>
        <TextInput
          placeholder="Search"
          style={tw(' mt-auto mb-auto bg-white w-80 rounded-3xl')}
        />
      </View>
      <View
        style={[
          tw('flex-1 bg-white w-full'),
          {borderTopRightRadius: 40, borderTopLeftRadius: 40},
        ]}>
        <View style={tw('  h-[20%]')}>
          <View>
            <Text style={{paddingLeft: 20, marginTop: 20}}>New Matches</Text>
          </View>
          <FlatList
          showsHorizontalScrollIndicator={false}
            horizontal
            data={items}
            renderItem={({item}) => <MatchComponent item={item} />}
            keyExtractor={(item, index) => `list-item-${index}`}
          />
        </View>
        <View>
            <Text style={{paddingLeft: 20, marginTop: 10}}>Messages</Text>
          </View>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({item}) => <ItemComponent item={item} />}
          keyExtractor={(item, index) => `list-item-${index}`}
        />
      </View>
    </View>
  );
};
