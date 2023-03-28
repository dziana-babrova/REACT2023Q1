import { TextInputProps } from 'types/types';

export const TextInput = (props: TextInputProps) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}></label>
      <input
        type="text"
        ref={props.reference}
        id={props.id}
        className={props.errorMessage ? 'error' : ''}
      />
      <div className="error-message">{props.errorMessage}</div>
    </div>
  );
};
