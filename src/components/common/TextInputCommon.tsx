// import {TextInput, Text, View, KeyboardTypeOptions} from 'react-native';
// import React, {Fragment} from 'react';
// import {useTailwind} from 'tailwind-rn';
// import {Controller, FieldError} from 'react-hook-form';
// import {Input, NativeBaseProvider} from 'native-base';
// import {NativeBaseConfigProvider} from 'native-base/lib/typescript/core/NativeBaseContext';

// export const TextInputCommon = ({
//   style = '',
//   error,
//   control,
//   placeholder = '',
//   viewClass = '',
//   phoneField = false,
//   keyboardType = 'default',
//   name,
//   secureTextEntry = false,
// }: {
//   style?: string;
//   error?: FieldError | undefined;
//   control: any;
//   placeholder?: string;
//   viewClass?: string;
//   phoneField?: boolean;
//   keyboardType?: KeyboardTypeOptions | undefined;
//   name: string;
//   secureTextEntry?: boolean;
// }) => {
//   const tw = useTailwind();
//   return (
//     <NativeBaseProvider>
//       <Fragment>
//         <Controller
//           control={control}
//           name={name}
//           render={({field: {onChange, onBlur, value}}) => (
//             <View style={tw(viewClass)}>
//               <Input
//               borderColor={'#CCCCCC'}
//               focusOutlineColor={'#4B164C'}
//                 leftElement={<View style={{paddingLeft:15}}>
//                 <Text style={{color:'grey'}}>+91</Text>
//                 </View>
//               }
//                 variant="rounded"
//                 backgroundColor={'none'}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 keyboardType={keyboardType}
//                 secureTextEntry={secureTextEntry}
//                 placeholder={placeholder}

//               />
//               {/* <TextInput
//               placeholder={placeholder}
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//               style={tw(style)}
//               keyboardType={keyboardType}
//               secureTextEntry={secureTextEntry}
//             /> */}

//             </View>
//           )}
//           />
//         {error && <Text style={tw('text-red-500 px-2')}>{error.message}</Text>}
//       </Fragment>
//     </NativeBaseProvider>
//   );
// };
import {TextInput, Text, View, KeyboardTypeOptions} from 'react-native';
import React, {Fragment} from 'react';
import {useTailwind} from 'tailwind-rn';
import {Controller, FieldError} from 'react-hook-form';
import {Input, NativeBaseProvider} from 'native-base';

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
    <NativeBaseProvider>
      <Fragment>
        <Controller
          control={control}
          name={name}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={tw(viewClass)}>
              <Input
                borderColor={'#CCCCCC'}
                focusOutlineColor={'#4B164C'}
                leftElement={
                  phoneField ? (
                    <View style={{paddingLeft: 15}}>
                      <Text style={{color: 'grey'}}>{'+91   |'}</Text>
                    </View>
                  ) : (
                    <View style={{paddingLeft: 15}} />
                  )
                }
                variant="rounded"
                backgroundColor={'none'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
              />
            </View>
          )}
        />

        {error && (
          <Text style={tw('text-red-500 px-2 mt-1')}>{error.message}</Text>
        )}
      </Fragment>
    </NativeBaseProvider>
  );
};
