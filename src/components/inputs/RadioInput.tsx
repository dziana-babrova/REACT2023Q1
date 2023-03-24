import React from 'react';
import './radio.scss';

type RadioInputProps = {
  className: string;
  label: string;
  name: string;
  reference: React.RefObject<HTMLInputElement>;
};

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
      </div>
    );
  }
}
