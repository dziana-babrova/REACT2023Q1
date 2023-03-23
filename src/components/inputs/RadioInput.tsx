import React from 'react';

type RadioInputProps = {
  className: string;
  label: string;
  name: string;
};

export class RadioInput extends React.Component<RadioInputProps> {
  radioInput: React.RefObject<HTMLInputElement>;

  constructor(props: RadioInputProps) {
    super(props);
    this.radioInput = React.createRef();
  }

  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="radio"
          ref={this.radioInput}
          id={this.props.label}
          name={this.props.name}
        />
        <label htmlFor={this.props.label}>{this.props.label}</label>
      </div>
    );
  }
}
