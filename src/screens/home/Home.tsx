import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackCardList} from '@types';
import Geolocation from '@react-native-community/geolocation';
import {updateUserLocation} from '@services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageConst} from '@constants';

export const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackCardList>) => {
  const tw = useTailwind();
  const [loader, setLoader] = useState(false);
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        // subscribeLocationLocation();
      } else {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
            // buttonPositive: '',
          },
        )
          .then(granted => {
            console.log(granted, 'granted');
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              // //To Check, If Permission is granted
              setLoader(true);
              getOneTimeLocation();
              // subscribeLocationLocation();
            } else {
              setLocationStatus('Permission Denied');
            }
          })
          .catch(e => setLoader(false));
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      async position => {
        try {
          setLocationStatus('You are Here');
          //getting the Longitude from the location json
          const currentLongitude = JSON.stringify(position.coords.longitude);
          //getting the Latitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude);
          //Setting Longitude state
          setCurrentLongitude(currentLongitude);
          //Setting Longitude state
          setCurrentLatitude(currentLatitude);
          await AsyncStorage.setItem(
            asyncStorageConst.latLogUser,
            JSON.stringify({
              lat: currentLatitude,
              lon: currentLatitude,
            }),
          );
          await updateUserLocation({
            lat: currentLatitude,
            lon: currentLongitude,
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoader(false);
        }
      },
      error => {
        setLoader(false);
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <View style={tw('flex-1 justify-between p-5')}>
      <View style={tw('flex-col justify-between gap-3 mt-20 ')}>
        {/* <div className="font-semibold text- font- leading- text- gap-" /> */}
        <Image
          source={AllImages.Home}
          style={tw('h-64 w-64 m-auto object-cover')}
        />
        <Text
          style={tw('font-semibold text-sm text-black leading-6 text-center')}>
          Lorem Ipsum has been the industry's
        </Text>
        <Text style={tw('font-normal text-xs text-black text-center px-3')}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </Text>
      </View>
      <View style={tw('flex-col justify-between gap-3 px-5 bg-transparent')}>
        <Text style={tw('font-normal text-xs text-[#636363] text-center')}>
          Lorem Ipsum has been the industry's
        </Text>
        <TouchableOpacity
          style={tw(
            `py-3 bg-[#4B164C] rounded-3xl font-semibold text-base ${
              loader ? 'opacity-50' : ''
            }`,
          )}
          onPress={() => navigation.navigate('BottomNavBar')}
          disabled={loader}>
          <Text style={tw('text-white text-center')}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
