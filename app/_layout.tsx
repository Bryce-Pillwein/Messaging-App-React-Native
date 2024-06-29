import { Slot } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'CallingCode': require('@/assets/fonts/CallingCode-Regular.ttf'),
    'Inter': require('@/assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-l': require('@/assets/fonts/Inter/Inter-Light.ttf'),
    'Inter-sb': require('@/assets/fonts/Inter/Inter-SemiBold.ttf'),
    'Inter-b': require('@/assets/fonts/Inter/Inter-Black.ttf'),
  });


  const setNavigationBar = async () => {
    await NavigationBar.setBackgroundColorAsync('hsl(0, 0%, 95%)');
    // await NavigationBar.setPositionAsync("absolute");
  };

  useEffect(() => {
    setNavigationBar();
  }, [])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
