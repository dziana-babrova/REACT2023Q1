import React from 'react';

type TextInputProps = {
  className: string;
  id: string;
  reference: React.RefObject<HTMLInputElement>;
  errorMessage: string;
};

export class TextInput extends React.Component<TextInputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.id}></label>
        <input
          type="text"
          ref={this.props.reference}
          id={this.props.id}
          className={this.props.errorMessage ? 'error' : ''}
        />
        <div className="error-message">{this.props.errorMessage}</div>
      </div>
    );
  }
}
