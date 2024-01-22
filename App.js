// App.js veya index.js dosyası
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import WelcomeScreen from './src/WelcomeScreen';
import SignupScreen from './src/SignupScreen';
import AnaEkranScreen from './src/AnaEkranScreen';
import SebzelerScreen from './src/Malzeme/SebzelerScreen'
import BaharatlarScreen from './src/Malzeme/BaharatlarScreen';
import BaklagillerScreen from './src/Malzeme/BaklagillerScreen';
import BugdayUrunleriScreen from './src/Malzeme/BugdayUrunleriScreen';
import DenizUrunleriScreen from './src/Malzeme/DenizUrunleriScreen';
import HayvansalGıdalarScreen from './src/Malzeme/HayvansalGıdalarScreen';
import KonserveTursuSosScreen from './src/Malzeme/KonserveTursuSosScreen';
import KuruyemisScreen from './src/Malzeme/KuruyemisScreen';
import MeyvelerScreen from './src/Malzeme/MeyvelerScreen';
import SutUrunleriScreen from './src/Malzeme/SutUrunleriScreen';
import YaglarScreen from './src/Malzeme/YaglarScreen';
import SepetScreen from './SepetScreen';
import firebaseConfig from './firebaseConfig'; // Firebase yapılandırmasını içeri aktarın

// Firebase'i başlatın
firebaseConfig;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerShown={false}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sepet" component={SepetScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AnaEkran" component={AnaEkranScreen} />
        <Stack.Screen name="Sebzeler" component={SebzelerScreen} />
        <Stack.Screen name="Baharatlar" component={BaharatlarScreen} />
        <Stack.Screen name="Baklagiller" component={BaklagillerScreen} />
        <Stack.Screen name="BugdayUrunleri" component={BugdayUrunleriScreen} />
        <Stack.Screen name="DenizUrunleri" component={DenizUrunleriScreen} />
        <Stack.Screen name="HayvansalGıdalar" component={HayvansalGıdalarScreen} />
        <Stack.Screen name="KonserveTursuSos" component={KonserveTursuSosScreen} />
        <Stack.Screen name="Meyveler" component={MeyvelerScreen} />
        <Stack.Screen name="SutUrunleri" component={SutUrunleriScreen} />
        <Stack.Screen name="Yaglar" component={YaglarScreen} />
        <Stack.Screen name="Kuruyemis" component={KuruyemisScreen} />
        {/* Diğer ekranları buraya ekleyin */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
