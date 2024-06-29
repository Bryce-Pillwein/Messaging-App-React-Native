import { Tabs } from 'expo-router';
import IconGeneral from '@/components/Icons/IconGeneral';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'hsl(0 0% 10%)',
      tabBarInactiveTintColor: 'hsl(0 0% 50%)',
      tabBarLabelStyle: {
        fontSize: 10,
        fontFamily: 'Inter-sb',
        color: 'hsl(0 0% 10%)'
      },
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: 'hsl(0 0% 95%)',
        shadowColor: 'hsl(0 0% 95%)',
      },
    }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => <IconGeneral type='chat' size={30} fill={color} />
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconGeneral type='profile' size={30} fill={color} />
        }}
      />

    </Tabs>
  );
}
