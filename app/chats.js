import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Pressable } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


// Componenents
import PaddingBlock from "@/components/UI/UIPaddingBlock";
import IconGeneral from '@/components/Icons/IconGeneral';

// Styles
import gss from "@/globalStyles";


export default function Index() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={[gss.containerMain,
    { flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }]}>


      <View style={ss.headerWrapper}>
        <Text style={{ flex: 1 }}>Chats</Text>
        <Pressable onPress={() => createNewChat() /** OR LINK TO NEW CHAT PAGE */}>
          <IconGeneral type='add-circle' fill='#fff' size='28' />
        </Pressable>
      </View>

      <View style={ss.wrapperInput}>
        <TextInput
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          style={[gss.input, ss.input]}
          placeholder='Search'
          enterKeyHint='search'
        />
      </View>

      <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
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

    </View >
  );
}


const ss = StyleSheet.create({

  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'hsl(0 0% 50%)',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  wrapperInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'hsl(0 0% 70%)',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    backgroundColor: 'hsl(0 0% 60%)',
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  btnSend: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderRadius: 5,
  },
})
