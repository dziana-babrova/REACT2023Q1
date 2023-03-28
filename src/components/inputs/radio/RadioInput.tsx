import { RadioInputProps } from 'types/types';
import './radio.scss';

export const RadioInput = (props: RadioInputProps) => {
  return (
    <div className={props.className}>
      <input
        type="radio"
        ref={props.reference}
        id={props.label}
        name={props.name}
        value={props.label}
      />
      <label htmlFor={props.label}>{props.label}</label>
      {props.errorMessage ? <div className="error-message">{props.errorMessage}</div> : <div></div>}
    </div>
  );
};
