import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

type DateInputProps = {
  className: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const DateInput = (props: DateInputProps) => {
  return (
    <div className={props.className}>
      <input {...props.register} type="date" className={props.errorMessage && 'error'} />
      <div className="error-message">{props.errorMessage}</div>
    </div>
  );
};
