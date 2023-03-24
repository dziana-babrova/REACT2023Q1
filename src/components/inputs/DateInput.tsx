import React from 'react';

type DateInputProps = {
  className: string;
  reference: React.RefObject<HTMLInputElement>;
};

export class DateInput extends React.Component<DateInputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <input type="date" ref={this.props.reference} />
      </div>
    );
  }
}
