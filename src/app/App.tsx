import { Routes } from '@routes';
import { Splash } from '@screens';
import React, { useState } from 'react';
import {
  SafeAreaView
} from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../../tailwind.json';
import { NativeBaseProvider } from 'native-base';

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={{flex: 1}}>
        {loading ? <Splash setLoading={setLoading} /> : <Routes />}
      </SafeAreaView>
    </TailwindProvider>
  );
}

export default App;
