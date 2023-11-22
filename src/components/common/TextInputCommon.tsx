import {TextInput, Text, View, KeyboardTypeOptions} from 'react-native';
import React, {Fragment} from 'react';
import {useTailwind} from 'tailwind-rn';
import {Controller, FieldError} from 'react-hook-form';

export const TextInputCommon = ({
  style = '',
  error,
  control,
  placeholder = '',
  viewClass = '',
  phoneField = false,
  keyboardType = 'default',
  name,
  secureTextEntry = false,
}: {
  style?: string;
  error?: FieldError | undefined;
  control: any;
  placeholder?: string;
  viewClass?: string;
  phoneField?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  name: string;
  secureTextEntry?: boolean;
}) => {
  const tw = useTailwind();
  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={tw(viewClass)}>
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={tw(style)}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
            />
            {phoneField && (
              <View
                style={tw(
                  'absolute top-[10px] left-4 text-black opacity-50 flex flex-row items-center gap-2',
                )}>
                <Text style={tw('text-black opacity-50')}>+91</Text>
                <Text style={tw('text-black')}>|</Text>
              </View>
            )}
          </View>
        )}
      />
      {error && <Text style={tw('text-red-500 px-2')}>{error.message}</Text>}
    </Fragment>
  );
};
