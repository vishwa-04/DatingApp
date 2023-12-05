import {View, Text, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';
import {ProfileBackground} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageConst} from '@constants';

export const EditProfile = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  const [userData, setUserData] = useState<any>(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(asyncStorageConst.loggedInUserData)
      .then((data: any) => setUserData(JSON.parse(data)))
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      {!loader ? (
        <ProfileBackground header={'Edit Profile'} navigate={navigation}>
          <View>
            <Text style={tw('text-[#6f6f6f] bg-[#fafafa] p-3')}>
              Public Profile
            </Text>
            <View style={tw('flex-row justify-between items-center p-3')}>
              <View style={tw('flex-row justify-between items-center gap-2')}>
                <Image
                  source={AllImages.FirstName}
                  style={tw('object-cover')}
                />
                <Text style={tw('font-medium text-base text-[#161616]')}>
                  First Name
                </Text>
              </View>
              <Text style={tw('text-black')}>{userData.username}</Text>
            </View>
            <View style={tw('flex-row justify-between items-center p-3')}>
              <View style={tw('flex-row justify-between items-center gap-2')}>
                <Image
                  source={AllImages.Nationality}
                  style={tw('object-cover')}
                />
                <Text style={tw('font-medium text-base text-[#161616]')}>
                  Nationality
                </Text>
              </View>
              <Text style={tw('text-black')}>{userData.nationality}</Text>
            </View>
            <View style={tw('flex-row justify-between p-3')}>
              <View style={tw('flex-row justify-between items-center gap-2')}>
                <Image source={AllImages.Emirates} style={tw('object-cover')} />
                <Text style={tw('font-medium text-base text-[#161616]')}>
                  Emirates
                </Text>
              </View>
              <Text style={tw('text-black')}>{userData?.emirates || ''}</Text>
            </View>
            <View style={tw('flex-row justify-between p-3')}>
              <View style={tw('flex-row justify-between items-center gap-2')}>
                <Image source={AllImages.Age} style={tw('object-cover')} />
                <Text style={tw('font-medium text-base text-[#161616]')}>
                  Age
                </Text>
              </View>
              <Text style={tw('text-black')}>{userData.age}</Text>
            </View>
            <View style={tw('flex-row justify-between p-3')}>
              <View style={tw('flex-row justify-between items-center gap-2')}>
                <Image
                  source={AllImages.Occupation}
                  style={tw('object-cover')}
                />
                <Text style={tw('font-medium text-base text-[#161616]')}>
                  Occupation
                </Text>
              </View>
              <Text style={tw('text-black')}>{userData.occupation}</Text>
            </View>
          </View>
          <View>
            <Text style={tw('text-[#6f6f6f] bg-[#fafafa] p-3')}>
              Private Detail
            </Text>
            <View style={tw('flex-row justify-between p-3')}>
              <View style={tw('flex-row justify-between items-center gap-2')}>
                <Image source={AllImages.Email} style={tw('object-cover')} />
                <Text style={tw('font-medium text-base text-[#161616]')}>
                  Email
                </Text>
              </View>
              <Text style={tw('text-black')}>{userData?.email || ''}</Text>
            </View>
            <View style={tw('flex-row justify-between p-3')}>
              <View style={tw('flex-row justify-between items-center gap-2')}>
                <Image source={AllImages.Phone} style={tw('object-cover')} />
                <Text style={tw('font-medium text-base text-[#161616]')}>
                  Phone
                </Text>
              </View>
              <Text style={tw('text-black')}>{userData?.contact || ''}</Text>
            </View>
          </View>
        </ProfileBackground>
      ) : (
        <ActivityIndicator size={'large'} color={'#D38CDF'} />
      )}
    </>
  );
};
