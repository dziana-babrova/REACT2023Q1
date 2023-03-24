import React from 'react';

type TextInputProps = {
  className: string;
  id: string;
};

export class TextInput extends React.Component<TextInputProps> {
  textInput: React.RefObject<HTMLInputElement>;

  constructor(props: TextInputProps) {
    super(props);
    this.textInput = React.createRef();
  }

  render() {
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.id}></label>
        <input type="text" ref={this.textInput} id={this.props.id} />
      </div>
    );
  }
}
