import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Pressable } from "react-native";


// Componenents
import PaddingBlock from "@/components/UI/UIPaddingBlock";
import IconGeneral from '@/components/Icons/IconGeneral';

// Styles
import gss from "@/globalStyles";
import AppSafeAreaContentWrapper from '@/components/SafeAreaWrappers/AppSafeAreaContentWrapper';
import Txt from '@/components/UI/UIText';


export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");


  const createNewChat = () => {

  };

  return (
    <AppSafeAreaContentWrapper>
      {/* HEADER */}
      <View style={ss.headerWrapper}>
        <Txt style={ss.pageHeading}>Chats</Txt>
        <Pressable onPress={() => createNewChat()} style={ss.btnCreateNewChat}>
          <IconGeneral type='add' fill='white' size={30} />
        </Pressable>
      </View>


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ss.wrapperInput}>
          <TextInput
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            style={ss.input}
            placeholder='Search'
            enterKeyHint='search'
          />
        </View>
        {/* 
              Chat Banners     
         */}

        {/* <View style={[gss.wrapperMain, { width: '90%' }]}>

          {Object.keys(conversation).map(messageId => (
            <View key={messageId}>
              <ContainerMessage
                key={messageId}
                user={conversation[messageId].user}
                dateTime={conversation[messageId].dateTime}
                message={conversation[messageId].message}
              />
              <PaddingBlock pad={10} />
            </View>
          ))}

        </View> */}
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

  wrapperInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    backgroundColor: 'hsl(0 0% 90%)',
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },

  btnCreateNewChat: {
    borderRadius: 5,
    backgroundColor: 'hsl(0 0% 20%)'
  }

})
