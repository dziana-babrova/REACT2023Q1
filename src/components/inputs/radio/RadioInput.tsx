import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import './radio.scss';

type RadioInputProps = {
  className: string;
  label: string;
  name: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const RadioInput = (props: RadioInputProps) => {
  return (
    <div className={props.className}>
      <input
        {...props.register}
        type="radio"
        id={props.label}
        name={props.name}
        value={props.label}
      />
      <label htmlFor={props.label}>{props.label}</label>
      {props.errorMessage && <div className="error-message">{props.errorMessage}</div>}
    </div>
  );
};
