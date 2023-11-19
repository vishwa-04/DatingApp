import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import Swiper from 'react-native-deck-swiper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackCardList} from '@types';

type dataProps = {
  firstname: string;
  image: any;
  id: number;
};
export const Swipe = ({
  navigation,
}: NativeStackScreenProps<RootStackCardList>) => {
  const DUMMY_DATA: dataProps[] = [
    {
      firstname: 'John',
      image:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg',
      id: 1,
    },
    {
      firstname: 'Bronnie',
      image:
        'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 2,
    },
    {
      firstname: 'Sania',
      image:
        'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 3,
    },
    {
      firstname: 'Katherine',
      image:
        'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 4,
    },
    {
      firstname: 'Anton',
      image:
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 5,
    },
  ];
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 justify-between pb-24 px-2 pt-2 h-full bg-white')}>
      <Image
        source={AllImages.LovelineText}
        style={tw('w-40 h-9 mx-auto object-cover rounded-2xl')}
      />
      <View style={tw('flex-1 h-[20%]')}>
        <Swiper
          stackSize={5}
          cardIndex={0}
          horizontalSwipe={true}
          verticalSwipe={false}
          animateCardOpacity
          containerStyle={{
            background: 'transparent',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          cards={DUMMY_DATA}
          renderCard={card => {
            return (
              <>
                {card.image && (
                  <View style={tw('bg-white h-[50%] rounded-xl')}>
                    <Image
                      resizeMode="cover"
                      source={{uri: card.image}}
                      style={tw('h-full w-full rounded-xl')}
                    />
                  </View>
                )}
              </>
            );
          }}
        />
      </View>
      <View style={tw('flex-col justify-between gap-y-2 bg-white z-40')}>
        <View style={tw('flex-row justify-center items-center gap-14')}>
          <Image source={AllImages.Close} style={tw('object-cover')} />
          <Image source={AllImages.Heart} style={tw('object-cover')} />
          <Image source={AllImages.Info} style={tw('object-cover')} />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('SwipeUserInfo');
          }}>
          <Text style={tw('text-center text-[#4B164C] font-bold text-base')}>
            Olivia jension
          </Text>
        </Pressable>
        <View style={tw('flex-row justify-center items-center gap-2')}>
          <Text style={tw('text-black')}>Art manager</Text>
          <View style={tw('flex-row justify-start gap-1 items-center')}>
            <Image source={AllImages.Location} style={tw('object-cover')} />
            <Text style={tw('text-black')}>10 km</Text>
          </View>
        </View>
        <Text style={tw('text-center font-normal text-sm text-black')}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </Text>
      </View>
    </View>
  );
};
