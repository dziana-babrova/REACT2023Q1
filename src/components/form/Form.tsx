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

class Form extends React.Component {
  render() {
    return (
      <form className="event-form">
        <p className="event-form__label">Give your event a name:</p>
        <TextInput id="name" className="event-form__input input-name " />
        <p className="event-form__label">Provide the held date:</p>
        <DateInput className="event-form__input input__date" />
        <p className="event-form__label">What are you planning to discuss?</p>
        {themes.map((theme) => (
          <CheckboxInput
            key={theme}
            className="event-form__input input-checkbox"
            label={theme}
            id={theme}
          />
        ))}
        <p className="event-form__label">Which language will your group speak?</p>
        <Select className="event-form__input select" defaultText="Language" options={langs} />
        <p className="event-form__label">Type of event:</p>
        {types.map((type) => (
          <RadioInput
            key={type}
            className="event-form__input input-radio"
            label={type}
            name="place"
          />
        ))}
        <p className="event-form__label">Link or Address where your event will take place:</p>
        <TextInput id="place" className="event-form__input input-place" />
        <p className="event-form__label">Upload a poster for your event:</p>
        <FileInput className="event-form__input input-file" />
        <input className="input-submit" type="submit" />
      </form>
    );
  }
}

export { Form };
