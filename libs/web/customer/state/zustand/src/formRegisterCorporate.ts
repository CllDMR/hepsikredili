import { RegisterStepType } from '@hepsikredili/web/customer/typings';
import create from 'zustand';
import { immer } from './store';

interface FormStateRegisterCorporate {
  step: RegisterStepType;

  address: string;
  accountEmail: string;
  name: string;
  activityCategory: string;
  corporateType: string;
  taxCity: string;
  taxOffice: string;
  tcNo?: string;
  taxNo?: string;
  userEmail: string;
  password: string;
  firstname: string;
  lastname: string;

  setStep: (step: RegisterStepType) => void;
  updateUser: (data: {
    userEmail: string;
    password: string;
    firstname: string;
    lastname: string;
  }) => void;
  updateAccount: (data: {
    address: string;
    accountEmail: string;
    name: string;
    activityCategory: string;
    corporateType: string;
    taxCity: string;
    taxOffice: string;
    tcNo?: string;
    taxNo?: string;
  }) => void;
}

export const useStoreFormRegisterCorporate = create<FormStateRegisterCorporate>(
  immer((set) => ({
    step: 'account',

    address: '',
    accountEmail: '',
    name: '',
    activityCategory: '',
    corporateType: '',
    taxCity: '',
    taxOffice: '',
    tcNo: '',
    taxNo: '',
    userEmail: '',
    password: '',
    firstname: '',
    lastname: '',

    setStep: (step) => set({ step }),
    updateUser: (input) => set(input),
    updateAccount: (input) => set(input),
  }))
);

export const accountSelector = (state: FormStateRegisterCorporate) => ({
  accountEmail: state.accountEmail,
  activityCategory: state.activityCategory,
  address: state.address,
  corporateType: state.corporateType,
  name: state.name,
  taxCity: state.taxCity,
  taxOffice: state.taxOffice,
  taxNo: state.taxNo,
  tcNo: state.tcNo,
});

export const userSelector = (state: FormStateRegisterCorporate) => ({
  userEmail: state.userEmail,
  password: state.password,
  firstname: state.firstname,
  lastname: state.lastname,
});
