import { FC, forwardRef, HTMLProps } from 'react';
import { ButtonContained, ButtonContainedProps } from './contained/contained';
import { ButtonFlat, ButtonFlatProps } from './flat/flat';
import { ButtonOutlined, ButtonOutlinedProps } from './outlined/outlined';

export type ButtonBaseProps = {
  title: string;
  fullWidth?: boolean;
  onClick?: HTMLProps<HTMLButtonElement>['onClick'];
};

export type ButtonProps =
  | ButtonContainedProps
  | ButtonOutlinedProps
  | ButtonFlatProps;

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  switch (props.variant) {
    case 'contained':
      return <ButtonContained {...props} buttonRef={ref} />;
    case 'flat':
      return <ButtonFlat {...props} />;
    case 'outlined':
      return <ButtonOutlined {...props} />;

    default: {
      const ex_: never = props;
      return ex_;
    }
  }
});
