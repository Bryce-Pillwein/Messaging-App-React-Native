import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, TextInput, Pressable } from "react-native";


// Componenents
import PaddingBlock from "@/components/UI/UIPaddingBlock";
import IconGeneral from '@/components/Icons/IconGeneral';

// Styles
import gss from "@/globalStyles";
import AppSafeAreaContentWrapper from '@/components/SafeAreaWrappers/AppSafeAreaContentWrapper';
import Txt from '@/components/UI/UIText';
import { router } from 'expo-router';


export default function Profile() {


  return (
    <AppSafeAreaContentWrapper>
      {/* HEADER */}
      <View style={ss.headerWrapper}>
        <Txt style={ss.pageHeading}>Profile</Txt>
        <Pressable onPress={() => router.push('(app)/(settings)/settings')}>
          <IconGeneral type='settings' fill='black' size={30} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

      </ScrollView>
    </AppSafeAreaContentWrapper>
  );
}


const ss = StyleSheet.create({
  // Page Heading
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  pageHeading: {
    fontFamily: 'Inter-sb',
    fontSize: 18,
  },

})
