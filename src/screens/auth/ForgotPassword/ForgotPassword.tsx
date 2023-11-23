import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {Button, Input, NativeBaseProvider} from 'native-base';

export const ForgotPassword = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  const tw = useTailwind();
  return (
    <NativeBaseProvider>
      <View style={tw('flex-1 justify-start h-full')}>
        {/* <div className='z-'> </div> */}
        <View
          style={tw(
            'bg-[#DF8CD1] flex flex-row justify-between items-center p-3 relative',
          )}>
          <Pressable onPress={() => navigation.navigate('Login')} style={{position:'relative'}}>
            <Image source={AllImages.LeftArrow} style={tw('object-cover')} />
          </Pressable>
          <View style={{width:'100%'}}>
          <Text
            style={tw('font-medium text-sm text-white item-center text-center')}>
            Change Password
          </Text>
          </View>
        </View>
        <View style={tw('flex-1 justify-between items-center')}>
          <View style={tw('gap-20 py-10')}>
            {/* <div className='h-40'></div> */}
            <View
              style={tw(
                'rounded-full bg-[#e4dfe5] h-40 w-40 flex-col justify-center items-center mx-auto',
              )}>
              <Image source={AllImages.Password} />
            </View>
            <View style={{width: '80%',gap:20}}>
              <Input
              rightElement={<View style={{paddingRight:15}}><Image source={show? AllImages.OpenEye:AllImages.CloseEye} style={{height:20,width:20}} tintColor={'grey'}/></View> }
                width={'100%'}
                borderColor={'#CCCCCC'}
                focusOutlineColor={'#4B164C'}
                variant="rounded"
                backgroundColor={'none'}
                secureTextEntry={true}
                placeholder={'Current Password'}
                placeholderTextColor={'grey'}
              />

              <Input
              rightElement={<View style={{paddingRight:15}}><Image source={show? AllImages.OpenEye:AllImages.CloseEye} style={{height:20,width:20}} tintColor={'grey'}/></View> }
              placeholderTextColor={'grey'}

                borderColor={'#CCCCCC'}
                focusOutlineColor={'#4B164C'}
                variant="rounded"
                backgroundColor={'none'}
                secureTextEntry={true}
                placeholder={'New PassWord'}
              />
            </View>
          </View>
          <View style={tw('gap-3 py-3')}>
            <TouchableOpacity
              style={tw(
                'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
              )}>
              <Text style={tw('text-white text-center')}> Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw(
                'py-3 px-32 bg-white rounded-3xl font-semibold text-base',
              )}>
              <Text style={tw('text-[#4B164C] text-center')}> Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
