import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AllIcons} from '@assets';
import React, {useState, useCallback, useEffect} from 'react';
import {View, Image, Text, Pressable, SafeAreaView} from 'react-native';
import {Bubble, GiftedChat, IMessage} from 'react-native-gifted-chat';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '@types';

export const ChatDetail = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const tw = useTailwind();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: AllIcons.Avatar1,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Background color for sender bubble
            backgroundColor: '#4B164C',
          },
          left: {
            // Background color for receiver bubble
            backgroundColor: '#FAEDF8',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#333',
          },
        }}
      />
    );
  };

  return (
    <View style={tw('flex-1 items-center bg-[#DF8CD1]')}>
      <SafeAreaView>
        <View style={tw(' items-center h-[20%]')} />

        <View
          style={[
            tw('flex-1 bg-white w-full'),
            {borderTopRightRadius: 40, borderTopLeftRadius: 40},
          ]}>
          <View style={tw('flex-row px-3 mt-4')}>
            <Pressable
              style={tw(' items-center w-[10%] mt-auto mb-auto')}
              onPress={() => navigation.goBack()}>
              <Image
                source={AllIcons.ArrowSimpleLeft}
                style={{height: 30, width: 30}}
              />
            </Pressable>
            <View style={tw('flex-row justify-between items-center w-[88%]')}>
              <View style={tw('flex-row')}>
                <Image source={AllIcons.Avatar1} />
                <View style={tw('ml-2')}>
                  <Text
                    style={{fontSize: 15, color: '#4B164C', fontWeight: '600'}}>
                    Jolly
                  </Text>
                  <Text style={{fontSize: 15, color: '#4B164C'}}>Online</Text>
                </View>
              </View>
              <Image source={AllIcons.Call} style={{height: 30, width: 30}} />
            </View>
          </View>
          <GiftedChat
            alwaysShowSend
            // renderSend={() => (
            //   <View
            //     style={{
            //       height: 50,
            //       width: 50,
            //       justifyContent: 'center',
            //       alignItems: 'center',
            //     }}>
            //     <Image
            //       source={AllIcons.SendMessage}
            //       style={{justifyContent: 'center'}}
            //     />
            //   </View>
            // )}
            renderBubble={renderBubble}
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
