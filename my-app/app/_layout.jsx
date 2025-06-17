import { Stack, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

// import { BottomSheetProvider } from '@masumdev/rn-bottom-sheet'
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {


  // If redirecting, don't show stack yet
  return (
    <Stack screenOptions={{ gestureEnabled: true }}>


 
   

  </Stack>
  
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ArchivoBlack: require('../assets/fonts/ArchivoBlack-Regular.otf'),
    Unageo: require('../assets/fonts/Unageo-Black.ttf'),
    Coco: require('../assets/fonts/Coco.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (

  

   


      <RootLayoutContent />
 
        

      );
}
