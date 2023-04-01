import { UseFormRegisterReturn } from 'react-hook-form';

type TextInputProps = {
  className: string;
  id: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const TextInput = (props: TextInputProps) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}></label>
      <input
        {...props.register}
        type="text"
        id={props.id}
        className={props.errorMessage ? 'error' : ''}
      />
      <div className="error-message">{props.errorMessage}</div>
    </div>
  );
};
