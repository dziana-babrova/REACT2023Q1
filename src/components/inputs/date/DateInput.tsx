import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

type DateInputProps = {
  className: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const DateInput = ({ className, register, errorMessage }: DateInputProps) => {
  return (
    <div className={className}>
      <input {...register} type="date" className={errorMessage && 'error'} />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};
