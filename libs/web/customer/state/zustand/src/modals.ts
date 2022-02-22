import create from 'zustand';
import { immer } from './store';

interface ModalsState {
  createAccountImage: boolean;
  setModal: (args: { createAccountImage: boolean }) => void;
}

export const useStoreModals = create<ModalsState>(
  immer((set) => ({
    createAccountImage: false,

    setModal: ({ createAccountImage }) =>
      set((state) => {
        state.createAccountImage = createAccountImage;
      }),
  }))
);
