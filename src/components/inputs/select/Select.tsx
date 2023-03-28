import { SelectProps } from 'types/types';

export const Select = (props: SelectProps) => {
  return (
    <div className={props.className}>
      <select
        className={props.errorMessage ? 'error' : ''}
        ref={props.reference}
        defaultValue={props.defaultText}
      >
        <option value={props.defaultText} disabled>
          {props.defaultText}
        </option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="error-message">{props.errorMessage}</div>
    </div>
  );
};
