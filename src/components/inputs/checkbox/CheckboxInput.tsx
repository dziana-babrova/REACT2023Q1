import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import './checkbox.scss';

export type CheckboxInputProps = {
  className: string;
  id: string;
  label: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const CheckboxInput = ({
  className,
  register,
  id,
  label,
  errorMessage,
}: CheckboxInputProps) => {
  return (
    <div className={className}>
      <input {...register} className={className} type="checkbox" id={id} value={label} />
      <label htmlFor={id}>{label}</label>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};
