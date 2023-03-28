import { DateInputProps } from 'types/types';

export const DateInput = (props: DateInputProps) => {
  return (
    <div className={props.className}>
      <input type="date" ref={props.reference} className={props.errorMessage ? 'error' : ''} />
      <div className="error-message">{props.errorMessage}</div>
    </div>
  );
};
