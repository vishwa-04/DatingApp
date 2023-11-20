import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {useTailwind} from 'tailwind-rn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';

export const Birthday = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = Array.from({length: 31}, (_, i) => (i + 1).toString());
  const years = Array.from({length: 2020 - 1930 + 1}, (_, i) =>
    (1930 + i).toString(),
  );

  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <View style={tw('items-center px-3')}>
        {/* Heading and description */}
        <View style={tw('w-80')}>
          {/* <div className='font-normal text-xs text-2xl'></div> */}
          <Text
            style={tw('text-center text-[#4B164C] font-bold text-2xl mb-4')}>
            When's your birthday
          </Text>
          <Text
            style={tw('text-center text-[#847c7c] font-semibold text-xs mb-4')}>
            Your age information will be updated on your profile page and this
            will be displayed publicly on your dashboard
          </Text>
        </View>
      </View>
      <View style={tw('flex-row justify-around w-full')}>
        <SelectDropdown
          defaultButtonText="MM"
          data={months}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
          buttonStyle={tw('w-[100] bg-white border border-gray-600 rounded-md')}
          // Add more styles if needed
        />
        <SelectDropdown
          defaultButtonText="DD"
          data={days}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
          buttonStyle={tw('w-[100] bg-white border border-gray-600 rounded-md')}
        />
        <SelectDropdown
          dropdownIconPosition="left"
          defaultButtonText="YYYY"
          data={years}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
          buttonStyle={tw('w-[100] bg-white border border-gray-600 rounded-md')}
        />
      </View>
      <View style={tw('w-full px-6 pb-6 absolute bottom-0')}>
        <Text style={tw('text-center text-[#847c7c] font-normal text-xs mb-3')}>
          Your age information will be updated
        </Text>
        <TouchableOpacity
          style={tw('py-3 bg-[#4B164C] rounded-3xl font-semibold text-base')}>
          <Text
            style={tw('text-white text-center')}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
