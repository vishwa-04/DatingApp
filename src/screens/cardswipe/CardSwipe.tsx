import {View, Text, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import { AllImages } from '../../../assets/images';
import FastImage from 'react-native-fast-image';

type dataProps = {
  firstname: string;
  image: any;
  id: number;
};
export const CardSwipe = () => {
  const DUMMY_DATA: dataProps[] = [
    {
      firstname: 'John',
      image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg',
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
  return (
    <View style={{flex: 1}}>
      <Swiper
        containerStyle={{
          background: 'transparent',
          backgroundColor: 'white',
          flex: 1,
        }}
        cards={DUMMY_DATA}
        infinite
        renderCard={card => {
          return (
            <>
              {card.image && (
                <View
                  style={{
                    height: 300,
                    width: 300,
                  }}>
                  <Text>{card.firstname}</Text>
                  <View style={{flex:1,height:300,width:300}}>
                    <Image
                    onLoadStart={()=>console.log("first")}
                    onLoadEnd={()=>console.log("second")}
                    onError={(e)=>console.log("error",e.nativeEvent.error)}
                    resizeMode='cover'
                      source={{uri:card.image}}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </View>
                </View>
              )}
            </>
          );
        }}></Swiper>
    </View>
  );
};
