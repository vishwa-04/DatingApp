import React, {useState} from 'react';
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
import {Splash} from '../screens/splash/Splash';

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
