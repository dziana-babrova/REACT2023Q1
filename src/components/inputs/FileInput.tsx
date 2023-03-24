import React from 'react';

type FileInputProps = {
  className: string;
};

export class FileInput extends React.Component<FileInputProps> {
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: FileInputProps) {
    super(props);
    this.fileInput = React.createRef();
  }

  render() {
    return (
      <div className={this.props.className}>
        <input
          className=""
          type="file"
          accept="image/png, image/jpg, image/gif, image/jpeg"
          ref={this.fileInput}
        />
      </div>
    );
  }
}
