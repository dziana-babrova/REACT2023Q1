import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

export type SelectProps = {
  className: string;
  defaultText: string;
  options: string[];
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const Select = (props: SelectProps) => {
  return (
    <div className={props.className}>
      <select
        className={props.errorMessage ? 'error' : ''}
        defaultValue={props.defaultText}
        placeholder={props.defaultText}
        {...props.register}
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
