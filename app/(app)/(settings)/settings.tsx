import { StyleSheet, ScrollView, View, Pressable } from "react-native";

// Componenents
import PaddingBlock from "@/components/UI/UIPaddingBlock";
import IconGeneral from '@/components/Icons/IconGeneral';
import { router } from 'expo-router';

// Styles
import gss from "@/globalStyles";
import AppSafeAreaContentWrapper from '@/components/SafeAreaWrappers/AppSafeAreaContentWrapper';
import Txt from '@/components/UI/UIText';


export default function Settings() {


  const handleSignOut = () => {

  };

  return (
    <AppSafeAreaContentWrapper>
      {/* HEADER */}
      <View style={ss.headerWrapper}>
        <Pressable onPress={() => router.back()}>
          <IconGeneral type='menu-back' fill='black' size={24} />
        </Pressable>
        <Txt style={ss.pageHeading}>Settings</Txt>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Txt>ADD APP SETTINGS</Txt>

        <PaddingBlock pad={30} />

        <Pressable onPress={() => handleSignOut()}
          style={({ pressed }) => [{ backgroundColor: pressed ? 'hsl(0 0% 75%)' : 'hsl(0 0% 85%)', }, ss.btnLogout]}>
          <IconGeneral type='logout' fill='black' size={30} />
          <Txt style={gss.ffIsb}>Sign Out</Txt>
        </Pressable>
      </ScrollView>
    </AppSafeAreaContentWrapper>
  );
}


const ss = StyleSheet.create({
  // Page Heading
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 15,
  },
  pageHeading: {
    fontFamily: 'Inter-sb',
    fontSize: 18,
  },


  btnLogout: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    borderRadius: 10,
  }

})
