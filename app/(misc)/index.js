import { useEffect, useRef, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Pressable } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


// Componenets
import ContainerMessage from "@/components/ContainerMessage";

// Styles
import gss from "@/globalStyles";
import PaddingBlock from "@/components/UI/UIPaddingBlock";
import IconGeneral from '@/components/Icons/IconGeneral';


// TESTING * DELETE
import { Link } from 'expo-router';


export default function Index() {
  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef(null);
  const [inputMessage, setInputMessage] = useState("");
  const [conversation, setConversation] = useState(testExampleConversation);


  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [conversation])

  const sendMessage = () => {
    if (inputMessage.trim().length <= 0) return;
    try {
      /**
       * Replace Code With Sending To Server
       *  - Post the message to server
       *  - Update the dom with message but with sending status
       *  - Wait for server to response with received
       *  - Update dom with sent status
       */
      const messageId = `M-${Object.keys(conversation).length + 1}`;
      const newMessage = {
        message: inputMessage,
        user: 'You',
        dateTime: new Date().toLocaleTimeString(),
      };
      setConversation({
        ...conversation,
        [messageId]: newMessage,
      });


      setInputMessage("");
    } catch (error) {

    }
  }

  return (
    <View style={[gss.containerMain,
    { paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }]}>

      <Text style={[gss.fs20, { textAlign: 'center', }]}>Messaging App</Text>

      <Link href="/chats">Chats</Link>

      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}>
        <View style={[gss.wrapperMain, { width: '90%' }]}>

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

        </View>
      </ScrollView>

      <View style={ss.wrapperInput}>
        <TextInput
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
          style={[gss.input, ss.input]}
          placeholder='Message'
          enterKeyHint='send'
          onSubmitEditing={() => sendMessage()}
        />

        <Pressable style={ss.btnSend} onPress={() => sendMessage()}>
          {({ pressed }) => (
            <View>
              {pressed ?
                <IconGeneral type='send' fill='hsl(0 0% 90%)' size={32} />
                :
                <IconGeneral type='send' fill='hsl(0 0% 60%)' size={32} />
              }
            </View>
          )}
        </Pressable>

      </View>

    </View >
  );
}


const ss = StyleSheet.create({


  wrapperInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'hsl(0 0% 20%)',
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 10,
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


const testExampleConversation = {
  "M-1": {
    "message": "Shall I compare thee to a summers day, thou art more beautiful",
    "user": "User 1",
    "dateTime": "Date Object"
  },
  "M-2": {
    "message": "Are we 100% certain that shakespear was not gay? ",
    "user": "User 2",
    "dateTime": "Date Object"
  },
  "M-3": {
    "message": "The picture of the Lockness monster was most likely a whales penis",
    "user": "User 1",
    "dateTime": "Date Object"
  },
  "M-4": {
    "message": "Dear friend now in the dusty clockless hours of the town when the streets lie \
black and steaming in the wake of the watertrucks and now when the drunk and the homeless \
have washed up in the lee of walls in alleys or abandoned lots and cats go forth highshouldered \
and lean in the grim perimeters about, now in these sootblacked brick or cobbled corridors where \
lightwire shadows make a gothic harp of cellar doors, no soul shall walk save you.",
    "user": "User 2",
    "dateTime": "Date Object"
  }
}