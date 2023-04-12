import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

export type FileInputProps = {
  className: string;
  errorMessage: string;
  register: UseFormRegisterReturn;
};

export const FileInput = ({ className, errorMessage, register }: FileInputProps) => {
  return (
    <div className={className}>
      <input
        {...register}
        className=""
        type="file"
        accept="image/png, image/jpg, image/gif, image/jpeg"
      />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};
