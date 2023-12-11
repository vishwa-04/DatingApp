import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';

const ItemComponent = ({item}: {item: any}) => {
  const tw = useTailwind();

  return (
    <View style={[tw('flex flex-row justify-center items-center px-5 py-3'),{flexWrap:'wrap',width:'50%'}]}>
      <Image style={tw('object-cover  rounded-xl w-full')} source={item.img1}/>

    </View>
  );
};

export const Like = () => {
  const [likes, setLikes] = useState('mylikes');

  const tw = useTailwind();
  const items = [
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
    {img1: AllImages.UserPhoto},
  ];
  const items2 = [
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
    {img1: AllImages.Rectangle74},
  ];
  return (
    <View>
      {/* <div className='w-'></div> */}
      <View style={tw('flex-row justify-center gap-2 p-2 mt-3')}>
        <TouchableOpacity style={tw('gap-2')} onPress={()=>{setLikes('mylikes')}}>
          <Text style={tw(`${likes==='mylikes'?'text-[#4b164c]':'text-[#df8cd1]'}`)}>My Likes</Text>
         {likes === 'mylikes' && <View
            style={tw(
              'border-b border border-gray-200 w-1/2 m-auto border-[#4b164c]',
            )}
          /> } 
        </TouchableOpacity>
        <View style={tw('border-l border border-[#df8cd1] ')} />
        <TouchableOpacity style={tw('gap-2')} onPress={()=>{setLikes('likesMe')}}>
          <Text  style={tw(`${likes==='likesMe'?'text-[#4b164c]':'text-[#df8cd1]'}`)}>Likes me</Text>
         {likes === 'likesMe' && <View
            style={tw(
              'border-b border border-gray-200 w-1/2 m-auto border-[#4b164c]',
            )}
          />} 
        </TouchableOpacity>
      </View>
      <Text style={tw('text-center p-2 text-black')}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 15,
          marginTop: '3%',
          paddingBottom: '10%',}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        numColumns={2}
        data={likes==='mylikes'?items:items2}
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
