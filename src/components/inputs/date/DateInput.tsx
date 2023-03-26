import React from 'react';
import { DateInputProps } from 'types/types';

export class DateInput extends React.Component<DateInputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <input
          type="date"
          ref={this.props.reference}
          className={this.props.errorMessage ? 'error' : ''}
        />
        <div className="error-message">{this.props.errorMessage}</div>
      </div>
    );
  }
}
