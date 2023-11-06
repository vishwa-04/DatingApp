import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {AllImages} from '../../assets/images';
import { Routes } from '../routes/Router';

function App(): JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <Routes />
    </SafeAreaView>
  );
}

export default App;
