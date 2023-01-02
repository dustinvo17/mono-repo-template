import chalk from "chalk";
import create from "zustand";

export interface UsePubSubStore {
  messages: Record<string, Array<(data: any) => void>>;
  publish: (event: string, data: any) => void;
  subscribe: (event: string, callback: (data: any) => any) => void;
  unsubscribe: (event: string, callback: (data: any) => any) => void;
}

export const usePubSubStore = create<UsePubSubStore>((set, get) => ({
  messages: {},
  publish: (event: string, data: any) => {
    const messages = { ...get().messages };
    if (!messages[event]) {
      messages[event] = [];
    }

    console.log(chalk.blueBright(`${event} published`), {
      data
    });

    messages[event].forEach((callback) => !!callback && callback(data));
    set((state) => ({
      ...state,
      messages
    }));
  },
  subscribe: (event: string, callback: (data: any) => any) => {
    const messages = { ...get().messages };
    if (!messages[event]) {
      messages[event] = [];
    }
    messages[event].push(callback);
    set((state) => ({
      ...state,
      messages
    }));
  },
  unsubscribe: (event: string, callback: (data: any) => any) => {
    const messages = { ...get().messages };
    if (!messages[event]) {
      messages[event] = [];
    }
    messages[event] = messages[event].filter(cb => cb !== callback);
    set((state) => ({
      ...state,
      messages
    }));
  }
}))