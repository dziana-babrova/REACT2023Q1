import { CheckboxInputProps } from 'types/types';
import './checkbox.scss';

export const CheckboxInput = (props: CheckboxInputProps) => {
  return (
    <div className={props.className}>
      <input
        className={props.className}
        type="checkbox"
        ref={props.reference}
        id={props.id}
        value={props.label}
      />
      <label htmlFor={props.id}>{props.label}</label>
      {props.errorMessage ? <div className="error-message">{props.errorMessage}</div> : <div></div>}
    </div>
  );
};
