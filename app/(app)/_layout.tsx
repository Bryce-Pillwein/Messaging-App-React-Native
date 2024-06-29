// _layout (app) tsx
import { useEffect } from 'react';
import { Stack, router } from 'expo-router';
// Components
import Loading from '../(misc)/loading';
// Scripts
// import { useAuth } from '@/components/Providers/AuthContext';

export default function AppLayout() {
  // const { user, loading } = useAuth();

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.replace("/login");
  //   }
  // }, [loading, user]);

  // if (loading) return <Loading />;

  // if (!user) {
  //   return null;
  // }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{}} />
    </Stack>
  );
}
