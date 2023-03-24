import React from 'react';

type FileInputProps = {
  className: string;
  reference: React.RefObject<HTMLInputElement>;
  errorMessage: string;
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
        {this.props.errorMessage ? <div>Error</div> : <div></div>}
      </div>
    );
  }
}
