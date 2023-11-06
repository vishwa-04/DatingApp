import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {AllImages} from '../../assets/images';
import {Routes} from '../routes/Router';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../../tailwind.json';

function App(): JSX.Element {
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </TailwindProvider>
  );
}

export default App;
