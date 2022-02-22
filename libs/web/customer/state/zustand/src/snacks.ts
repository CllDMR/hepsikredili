import { SnackProps } from '@molecules/common/SnackBar/Snack';
import create from 'zustand';
import { immer } from './store';

interface SnacksState {
  snacks: SnackProps[];
  maxSnacks: number;
  enqueueSnack: (
    snack: Omit<SnackProps, 'id'> & { id?: SnackProps['id'] }
  ) => void;
  unenqueueSnack: (id: SnackProps['id']) => void;
}

export const useStoreSnacks = create<SnacksState>(
  immer((set) => ({
    snacks: [],
    maxSnacks: 3,

    enqueueSnack: (snack) =>
      set((state) => {
        if (state.snacks.length >= state.maxSnacks) {
          state.snacks.splice(0, 1);
        }
        state.snacks.push({
          id: (Math.random() * Date.now()).toFixed(0),
          ...snack,
        });
      }),
    unenqueueSnack: (id) =>
      set((state) => {
        const index = state.snacks.findIndex((e) => e.id === id);
        if (index !== -1) state.snacks.splice(index, 1);
      }),
  }))
);
