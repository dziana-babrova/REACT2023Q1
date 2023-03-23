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
      <div>
        <input className={this.props.className} type="date" ref={this.dateInput} />
      </div>
    );
  }
}
