import {TextInput, Text} from 'react-native';
import React, {Fragment} from 'react';
import {useTailwind} from 'tailwind-rn';
import {Controller, FieldError} from 'react-hook-form';

export const TextInputCommon = ({
  style = '',
  error,
  control,
  placeholder = '',
}: {
  style?: string;
  error?: FieldError | undefined;
  control: any;
  placeholder?: string;
}) => {
  const tw = useTailwind();
  return (
    <Fragment>
      <Controller
        control={control}
        name="phoneNumber"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={tw(style)}
          />
        )}
      />
      {error && <Text style={tw('text-red-500 px-2')}>{error.message}</Text>}
    </Fragment>
  );
};

export default TextInput;
