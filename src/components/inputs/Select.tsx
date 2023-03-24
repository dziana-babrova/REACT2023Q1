import React from 'react';

type SelectProps = {
  className: string;
  defaultText: string;
  options: string[];
  reference: React.RefObject<HTMLSelectElement>;
  errorMessage: string;
};

export class Select extends React.Component<SelectProps> {
  render() {
    return (
      <select
        className={this.props.className + this.props.errorMessage ? 'error' : ''}
        ref={this.props.reference}
        defaultValue={this.props.defaultText}
      >
        <option value={this.props.defaultText} disabled>
          {this.props.defaultText}
        </option>
        {this.props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}
