import React from 'react';

type SelectProps = {
  className: string;
  defaultText: string;
  options: string[];
  reference: React.RefObject<HTMLSelectElement>;
};

export class Select extends React.Component<SelectProps> {
  render() {
    return (
      <select className={this.props.className} ref={this.props.reference}>
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
