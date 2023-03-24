import React from 'react';

type TextInputProps = {
  className: string;
  id: string;
  reference: React.RefObject<HTMLInputElement>;
};

export class TextInput extends React.Component<TextInputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.id}></label>
        <input type="text" ref={this.props.reference} id={this.props.id} />
      </div>
    );
  }
}
