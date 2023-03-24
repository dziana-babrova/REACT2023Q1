import React from 'react';

type DateInputProps = {
  className: string;
};

export class DateInput extends React.Component<DateInputProps> {
  dateInput: React.RefObject<HTMLInputElement>;

  constructor(props: DateInputProps) {
    super(props);
    this.dateInput = React.createRef();
  }

  render() {
    return (
      <div className={this.props.className}>
        <input type="date" ref={this.dateInput} />
      </div>
    );
  }
}
