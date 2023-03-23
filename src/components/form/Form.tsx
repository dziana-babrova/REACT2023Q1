import { TextInput } from 'components/inputs/TextInput';
import { DateInput } from 'components/inputs/DateInput';
import { FileInput } from 'components/inputs/FileInput';
import { CheckboxInput } from 'components/inputs/CheckboxInput';
import { RadioInput } from 'components/inputs/RadioInput';
import React from 'react';
import { Select } from 'components/inputs/Select';

const langs = ['English', 'German', 'French', 'Italian', 'Chinese'];
const types = ['online', 'offline'];
const themes = ['character', 'episode', 'season', 'news about show'];

class Form extends React.Component<FormData> {
  render() {
    return (
      <form className="form">
        <p>Give your event a name:</p>
        <TextInput id="name" className="input input__name" />
        <p>Provide the held date:</p>
        <DateInput className="input input__date" />
        <p>What are you planning to discuss?</p>
        {themes.map((theme) => (
          <CheckboxInput key={theme} className="input input__checkbox" label={theme} id={theme} />
        ))}
        <p>Which language will your group speak?</p>
        <Select className="select" defaultText="Language" options={langs} />
        <p>Type of event:</p>
        {types.map((type) => (
          <RadioInput key={type} className="input input__radio" label={type} name="place" />
        ))}
        <p>Link or Address where your event will take place:</p>
        <TextInput id="place" className="input input__place" />
        <p>Upload a poster for your event:</p>
        <FileInput className="input input__file" />
        <input type="submit" />
      </form>
    );
  }
}

export { Form };
