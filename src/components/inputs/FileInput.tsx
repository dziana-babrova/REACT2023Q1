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
      <div>
        <input className={this.props.className} type="file" ref={this.fileInput} />
      </div>
    );
  }
}
