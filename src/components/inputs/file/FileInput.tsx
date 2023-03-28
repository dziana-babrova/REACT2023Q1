import { FileInputProps } from 'types/types';

export const FileInput = (props: FileInputProps) => {
  return (
    <div className={props.className}>
      <input
        className=""
        type="file"
        accept="image/png, image/jpg, image/gif, image/jpeg"
        ref={props.reference}
      />
      <div className="error-message">{props.errorMessage}</div>
    </div>
  );
};
