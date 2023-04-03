import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import './checkbox.scss';

export type CheckboxInputProps = {
  className: string;
  id: string;
  label: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const CheckboxInput = (props: CheckboxInputProps) => {
  return (
    <div className={props.className}>
      <input
        {...props.register}
        className={props.className}
        type="checkbox"
        id={props.id}
        value={props.label}
      />
      <label htmlFor={props.id}>{props.label}</label>
      {props.errorMessage ? <div className="error-message">{props.errorMessage}</div> : <div></div>}
    </div>
  );
};
