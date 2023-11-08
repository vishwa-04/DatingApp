import {View, Switch} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';

export const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const tw = useTailwind();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={tw('border-2 border-gray-300 rounded-3xl overflow-hidden')}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={tw('-m-1')}
      />
    </View>
  );
};
