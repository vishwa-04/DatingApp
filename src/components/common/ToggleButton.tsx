import {Switch} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';

export const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const tw = useTailwind();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <Switch
      thumbColor={isEnabled ? '#34C759' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={tw('')}
    />
  );
};
