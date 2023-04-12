import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

export type SelectProps = {
  className: string;
  defaultText: string;
  options: string[];
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const Select = ({
  className,
  defaultText,
  options,
  errorMessage,
  register,
}: SelectProps) => {
  return (
    <div className={className}>
      <select
        className={errorMessage ? 'error' : ''}
        defaultValue={defaultText}
        placeholder={defaultText}
        {...register}
      >
        <option value={defaultText} disabled>
          {defaultText}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};
