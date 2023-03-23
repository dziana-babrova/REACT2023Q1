import React from 'react';

type SelectProps = {
  className: string;
  defaultText: string;
  options: string[];
};

export class Select extends React.Component<SelectProps> {
  select: React.RefObject<HTMLInputElement>;

  constructor(props: SelectProps) {
    super(props);
    this.select = React.createRef();
  }

  render() {
    return (
      <select className={this.props.className}>
        <option value={this.props.defaultText} disabled selected>
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
