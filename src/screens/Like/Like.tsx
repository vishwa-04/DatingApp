import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';

const ItemComponent = ({item}: {item: any}) => {
  const tw = useTailwind();

  return (
    <View style={tw('flex flex-row justify-between items-center px-5 py-3')}>
      <Image style={tw('object-cover w-[47%] rounded-xl')} source={item.img1}></Image>
      <Image style={tw('object-cover w-[47%] rounded-xl')} source={item.img1}></Image>
    </View>
  );
};

export const Like = () => {
  const tw = useTailwind();
  const items = [
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto, img2: AllImages.UserPhoto},
  ];
  return (
    <View>
      {/* <div className='w-'></div> */}
      <View style={tw('flex-row justify-center gap-2 p-2 mt-3')}>
        <TouchableOpacity style={tw('gap-2')}>
          <Text style={tw('text-[#4b164c]')}>My Likes</Text>
          <View
            style={tw(
              'border-b border border-gray-200 w-1/2 m-auto border-[#4b164c]',
            )}
          />
        </TouchableOpacity>
        <View style={tw('border-l border border-[#df8cd1] ')} />
        <TouchableOpacity style={tw('gap-2')}>
          <Text style={tw('text-[#df8cd1]')}>Likes me</Text>
          <View
            style={tw(
              'border-b border border-gray-200 w-1/2 m-auto border-[#df8cd1]',
            )}
          />
        </TouchableOpacity>
      </View>
      <Text style={tw('text-center p-2 text-black')}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({item}) => <ItemComponent item={item} />}
        keyExtractor={(item, index) => `list-item-${index}`}
      />
      {/* <ScrollView>
        <View style={tw('flex-row flex-wrap justify-between p-6 gap-y-6')}>
          <Image
            source={AllImages.UserPhoto}
            style={tw('w-36 h-60 object-cover rounded-2xl')}
          />
          <Image
            source={AllImages.UserPhoto}
            style={tw('w-36 h-60 object-cover rounded-2xl')}
          />
          <Image
            source={AllImages.UserPhoto}
            style={tw('w-36 h-60 object-cover rounded-2xl')}
          />
          <Image
            source={AllImages.UserPhoto}
            style={tw('w-36 h-60 object-cover rounded-2xl')}
          />
          <Image
            source={AllImages.UserPhoto}
            style={tw('w-36 h-60 object-cover rounded-2xl')}
          />
        </View>
      </ScrollView> */}
    </View>
  );
};
