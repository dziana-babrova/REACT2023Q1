import { UseFormRegisterReturn } from 'react-hook-form';

type TextInputProps = {
  className: string;
  id: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const TextInput = ({ className, id, errorMessage, register }: TextInputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id}></label>
      <input {...register} type="text" id={id} className={errorMessage ? 'error' : ''} />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};
