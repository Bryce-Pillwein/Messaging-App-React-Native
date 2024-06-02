import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


interface ContainerMessageProps {
  user: string;
  dateTime: string;
  message: string;
}

const ContainerMessage: React.FC<ContainerMessageProps> = ({ user, dateTime, message }) => {

  return (
    <View style={ss.container}>
      <View style={ss.headerWrapper}>
        <Text style={{ flex: 1, }}>{user}</Text>
        <Text style={{ flex: 1, textAlign: 'right' }}>{dateTime}</Text>
      </View>

      <Text style={{ fontWeight: 400 }}>{message}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(150 150 150)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    width: '100%',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

export default ContainerMessage;