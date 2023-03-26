import React from 'react';
import { FileInputProps } from 'types/types';

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
        <div className="error-message">{this.props.errorMessage}</div>
      </div>
    );
  }
}
