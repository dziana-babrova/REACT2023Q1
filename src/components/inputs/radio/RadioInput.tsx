import React from 'react';
import { RadioInputProps } from 'types/types';
import './radio.scss';

export class RadioInput extends React.Component<RadioInputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <input
          type="radio"
          ref={this.props.reference}
          id={this.props.label}
          name={this.props.name}
        />
        <label htmlFor={this.props.label}>{this.props.label}</label>
        {this.props.errorMessage ? (
          <div className="error-message">{this.props.errorMessage}</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
