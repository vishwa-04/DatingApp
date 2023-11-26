import {AllIcons} from '@assets';
import {AllImages} from '@assets';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '@types';

export const Quiz = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  return (
    <ImageBackground source={AllIcons.BubbleBg} style={[tw('flex-1 h-[30%]')]}>
      <View style={tw('gap-5 mx-auto mt-28')}>
        <View
          style={tw(
            'bg-white rounded-xl p-10 flex-col justify-between gap-6 mx-5',
          )}>
          <Text style={tw('text-[#aa2fc1] font-medium text-base text-center')}>
            Today's topic
          </Text>
          <Text style={tw('text-[#2b262d] font-medium text-base')}>
            Lorem Ipsum has been the i Lorem Ipsum has been the i
          </Text>
        </View>
        <View style={tw('mx-auto gap-y-3')}>
          <TextInput
            style={tw(
              'h-14 w-72 border rounded-xl bg-white border-2 border-[#ff2fc1] relative text-black',
            )}
            placeholder="Option 1"
            placeholderTextColor="#2b262d"
          />
          <Image
            source={AllImages.QuizTrue}
            style={tw(' absolute top-4 right-3')}
          />
          <TextInput
            style={tw(
              'h-14 w-72 border rounded-xl bg-white border-2 border-[#ff2fc1] text-black',
            )}
            placeholder="Option 2"
            placeholderTextColor="#2b262d"
          />
          <TextInput
            style={tw(
              'h-14 w-72 border rounded-xl bg-white border-2 border-[#ff2fc1] text-black',
            )}
            placeholder="Option 3"
            placeholderTextColor="#2b262d"
          />
          <TextInput
            style={tw(
              'h-14 w-72 border rounded-xl bg-white border-2 border-[#ff2fc1] text-black',
            )}
            placeholder="Option 4"
            placeholderTextColor="#2b262d"
          />
        </View>
        <View style={tw('flex-row justify-center items-center mt-8')}>
          <TouchableOpacity
            style={tw(
              'py-3 px-24 bg-[#4B164C] rounded-3xl font-semibold text-base',
            )}
            onPress={() => {
              navigation.navigate('StartChatting');
            }}>
            <Text style={tw('text-white text-center')}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
