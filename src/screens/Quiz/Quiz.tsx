import {AllIcons} from '../../../assets/icons/index';
import {AllImages} from '../../../assets/images/index';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export const Quiz = () => {
  const tw = useTailwind();
  return (
    <ImageBackground source={AllIcons.BubbleBg} style={[tw('flex-1 h-[30%]')]}>
      <View style={tw('gap-5 mx-auto mt-28')}>
        {/* <div className="font-medium text-base h-" /> */}
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
              'h-14 w-72 border rounded-xl bg-white border-2 border-[#ff2fc1] relative',
            )}
            placeholder="Option 1"
          />
          <Image
            source={AllImages.QuizTrue}
            style={tw('h-5 w-5 absolute top-4 right-3')}
          />
          <TextInput
            style={tw(
              'h-14 w-72 border rounded-xl bg-white border-2 border-[#ff2fc1]',
            )}
            placeholder="Option 2"
          />
          <TextInput
            style={tw(
              'h-14 w-72 border rounded-xl bg-white border-2 border-[#ff2fc1]',
            )}
            placeholder="Option 3"
          />
          <TextInput
            style={tw(
              'h-14 w-72 border rounded-xl bg-white border-2 border-[#ff2fc1]',
            )}
            placeholder="Option 4"
          />
        </View>
        <View style={tw('flex-row justify-center items-center mt-8')}>
          <TouchableOpacity
            style={tw(
              'py-3 px-24 bg-[#4B164C] rounded-3xl font-semibold text-base',
            )}>
            <Text style={tw('text-white text-center')}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
