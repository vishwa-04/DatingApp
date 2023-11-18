import {Switch} from 'react-native-switch';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';

export const ToggleButton = ({
  backgroundActive = '#32D74B',
  backgroundInactive = '#78788029',
  circleBorderActiveColor = '#ffffff',
  circleBorderInactiveColor = '#ffffff',
}: {
  backgroundActive?: string;
  backgroundInactive?: string;
  circleBorderActiveColor?: string;
  circleBorderInactiveColor?: string;
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const tw = useTailwind();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <Switch
      activeText=""
      inActiveText=""
      backgroundActive={backgroundActive}
      backgroundInactive={backgroundInactive}
      circleBorderActiveColor={circleBorderActiveColor}
      circleBorderInactiveColor={circleBorderInactiveColor}
      switchLeftPx={4}
      barHeight={32}
      switchRightPx={4}
      circleSize={28}
      switchWidthMultiplier={1.8}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
