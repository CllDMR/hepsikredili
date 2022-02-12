import {
  DefaultValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import './form.module.css';

/* eslint-disable-next-line */
export type FormProps<TFormValues> = {
  defaultValues?: DefaultValues<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
  defaultValues,
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ defaultValues });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

export default Form;
