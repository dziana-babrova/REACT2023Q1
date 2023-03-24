import React from 'react';
import './checkbox.scss';

type CheckboxInputProps = {
  className: string;
  id: string;
  label: string;
  reference: React.RefObject<HTMLInputElement>;
};

export class CheckboxInput extends React.Component<CheckboxInputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <input
          className={this.props.className}
          type="checkbox"
          ref={this.props.reference}
          id={this.props.id}
        />
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}
