import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const Chats = () => {
    const [messages, setMessages] = useState([
       
        {
          _id: 0,
          text: ' ',
          createdAt: new Date().getTime(),
          system: true
        },
      
        {
          _id: 1,
          text: 'Hello!',
          createdAt: new Date().getTime(),
          user: {
            _id: 2,
            name: 'Test User'
          }
        }
      ]);
      const handleSend = (newMessage = []) => {
        setMessages(GiftedChat.append(messages, newMessage));
      }
      // const handleSend1 = (newMessage = []) => {
      //   setMessages(GiftedChat.append(messages, newMessage));
      // }
  return (
  
   <GiftedChat
    messages={messages}
    onSend={newMessage => handleSend(newMessage)}
    user={{ _id: 1 }}
    />
    )
}

export default Chats