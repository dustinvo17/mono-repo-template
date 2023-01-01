import React, { useState } from "react";
import createContext from "constate";

export const [PubSubProvider, usePubSub] = createContext(() => {
  const [messages, setMessages] = useState<Record<string, Array<any>>>({});

  const publish = (event: string, data: any) => {
    setMessages(state => {
      const newMessages = { ...state };
      if (!newMessages[event]) {
        newMessages[event] = [];
      }
      newMessages[event].forEach(callback => callback(data));
      return newMessages;
    });
  };

  const subscribe = (event: string, callback: (data: any) => any) => {
    setMessages(state => {
      const newMessages = { ...state };
      if (!newMessages[event]) {
        newMessages[event] = [];
      }
      newMessages[event].push(callback);
      return newMessages;
    });
  };

  return { messages, publish, subscribe };
})