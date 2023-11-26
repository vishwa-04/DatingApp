import {Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import React, {useMemo, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {useTailwind} from 'tailwind-rn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {RegisterFinalApi} from '@services';
import {apiResponse, asyncStorageConst, genderConst} from '@constants';
import {ButtonLoader} from '@components';

export const Birthday = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const [loader, setLoader] = useState(false);
  const [birthDate, setBirthDate] = useState({
    date: null,
    month: null,
    year: null,
  });
  const [datesDropdown, setDatesDropDown] = useState<string[]>([]);
  const [dirty, setDirty] = useState<boolean>(false);
  const calender = useMemo(() => dates(), []);
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
  function dates() {
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: currentYear - 1930 + 1}, (_, i) =>
      (1930 + i).toString(),
    );
    return {years};
  }
  const onSubmit = async () => {
    try {
      setDirty(true);
      const contact_no = await AsyncStorage.getItem(
        asyncStorageConst.RegisterPhone,
      );
      const username = await AsyncStorage.getItem(
        asyncStorageConst.RegisterUserName,
      );
      const password = await AsyncStorage.getItem(
        asyncStorageConst.RegisterPassword,
      );
      const gender = await AsyncStorage.getItem(
        asyncStorageConst.RegisterGender,
      );
      const dob = `${birthDate.date}/${
        months.indexOf(birthDate.month ? birthDate.month : 'January') + 1
      }/${birthDate.year}`;
      const response: any = await RegisterFinalApi({
        contact_no,
        username,
        password,
        gender,
        dob,
        is_register: true,
        preference:
          gender === genderConst.Male ? genderConst.Female : genderConst.Male,
      });
      if (response?.data?.status === apiResponse.fail) {
        Toast.showWithGravityAndOffset(
          response?.data?.message || '',
          Toast.LONG,
          Toast.TOP,
          0, // X Offset
          30, // Y Offset - Adjust this value as needed
        );
        return;
      }
      navigation.navigate('Home');
    } catch (error: any) {
      Toast.showWithGravityAndOffset(
        error?.message,
        Toast.LONG,
        Toast.TOP,
        0, // X Offset
        30, // Y Offset - Adjust this value as needed
      );
    } finally {
      setLoader(false);
    }
  };

  const setDateDopDownData = (month: string, year: number) => {
    try {
      const monthNumber = months.indexOf(month) + 1;
      const daysInMonth = new Date(year, monthNumber, 0).getDate();
      setDatesDropDown(
        Array.from({length: daysInMonth}, (_, i) => (i + 1).toString()),
      );
    } catch (error) {
      console.log(error);
    }
  };
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
          dropdownIconPosition="left"
          defaultButtonText="YYYY"
          data={calender.years}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            if (birthDate.month) {
              setDateDopDownData(birthDate.month, selectedItem);
            }
            setBirthDate(birthDate => {
              return {
                ...birthDate,
                year: selectedItem,
              };
            });
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
          defaultButtonText="MM"
          data={months}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            if (birthDate.year) {
              setDateDopDownData(selectedItem, birthDate.year);
            }
            setBirthDate(birthDate => {
              return {
                ...birthDate,
                month: selectedItem,
              };
            });
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
          disabled={Boolean(
            birthDate.month === null || birthDate.year === null,
          )}
          defaultButtonText="DD"
          data={datesDropdown}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setBirthDate(birthDate => {
              return {
                ...birthDate,
                date: selectedItem,
              };
            });
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
        {dirty && (
          <Text style={tw('text-red-500 px-2 text-center mb-2')}>
            {`${
              birthDate.month === null
                ? 'Please select the month'
                : birthDate.date === null
                ? ' Please select the date'
                : birthDate.year === null
                ? 'Please select the year'
                : ''
            }`}
          </Text>
        )}
        <Text style={tw('text-center text-[#847c7c] font-normal text-xs mb-3')}>
          Your age information will be updated
        </Text>
        <TouchableOpacity
          style={tw(
            `py-3 bg-[#4B164C] rounded-3xl font-semibold text-base ${
              loader ? 'opacity-70' : ''
            }`,
          )}
          onPress={() => {
            onSubmit();
          }}
          disabled={loader}>
          {loader ? (
            <ButtonLoader />
          ) : (
            <Text style={tw('text-white text-center font-semibold text-base')}>
              Continue
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
