

import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { AllImages } from '../../assets/images';



function App(): JSX.Element {

 

  return (
    <SafeAreaView>
   
      <ScrollView
       >
       <ImageBackground source={AllImages.AppBg} style={{height:800,width:'auto'}}>
        <View style={{flex:1}}>
          <Image source={AllImages.Logo} style={{resizeMode:'contain',height:300,width:300,marginLeft:'auto',marginRight:'auto',marginBottom:'auto',marginTop:'auto'}}/>
        </View>
       </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}



export default App;
