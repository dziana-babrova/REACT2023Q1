import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import './radio.scss';

type RadioInputProps = {
  className: string;
  label: string;
  name: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const RadioInput = ({ className, label, name, errorMessage, register }: RadioInputProps) => {
  return (
    <div className={className}>
      <input {...register} type="radio" id={label} name={name} value={label} />
      <label htmlFor={label}>{label}</label>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};
