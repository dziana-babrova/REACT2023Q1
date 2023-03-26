import React from 'react';
import { SelectProps } from 'types/types';

export class Select extends React.Component<SelectProps> {
  render() {
    return (
      <div className={this.props.className}>
        <select
          className={this.props.errorMessage ? 'error' : ''}
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
        <div className="error-message">{this.props.errorMessage}</div>
      </div>
    );
  }
}
