import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

export type FileInputProps = {
  className: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const FileInput = (props: FileInputProps) => {
  return (
    <div className={props.className}>
      <input
        {...props.register}
        className=""
        type="file"
        accept="image/png, image/jpg, image/gif, image/jpeg"
      />
      <div className="error-message">{props.errorMessage}</div>
    </div>
  );
};
