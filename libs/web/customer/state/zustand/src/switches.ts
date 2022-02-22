import create from 'zustand';
import { immer } from './store';

interface SwitchesState {
  login: SwitchSideType;
  register: SwitchSideType;

  setLoginSwitch: (step: SwitchSideType) => void;
  setRegisterSwitch: (step: SwitchSideType) => void;
}

export const useStoreSwitches = create<SwitchesState>(
  immer((set) => ({
    login: 'left',
    register: 'left',

    setLoginSwitch: (step) => set({ login: step }),
    setRegisterSwitch: (step) => set({ register: step }),
  }))
);

// export const accountSelector = (state: FormStateRegisterCorporate) => ({
//   accountEmail: state.accountEmail,
//   activityCategory: state.activityCategory,
//   address: state.address,
//   corporateType: state.corporateType,
//   name: state.name,
//   taxCity: state.taxCity,
//   taxOffice: state.taxOffice,
//   taxNo: state.taxNo,
//   tcNo: state.tcNo,
// });

// export const userSelector = (state: FormStateRegisterCorporate) => ({
//   userEmail: state.userEmail,
//   password: state.password,
//   firstname: state.firstname,
//   lastname: state.lastname,
// });
