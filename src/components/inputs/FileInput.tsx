import React from 'react';

type FileInputProps = {
  className: string;
  reference: React.RefObject<HTMLInputElement>;
};

export class FileInput extends React.Component<FileInputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <input
          className=""
          type="file"
          accept="image/png, image/jpg, image/gif, image/jpeg"
          ref={this.props.reference}
        />
      </div>
    );
  }
}
