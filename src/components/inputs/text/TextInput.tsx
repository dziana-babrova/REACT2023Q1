import React from 'react';
import { TextInputProps } from 'types/types';

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
