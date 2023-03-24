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

class Form extends React.Component<Record<string, never>> {
  eventName: React.RefObject<HTMLInputElement>;
  eventPlace: React.RefObject<HTMLInputElement>;
  eventDate: React.RefObject<HTMLInputElement>;
  eventTheme: React.RefObject<HTMLInputElement>[];
  eventLang: React.RefObject<HTMLSelectElement>;
  eventType: React.RefObject<HTMLInputElement>[];
  eventPoster: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, never>) {
    super(props);
    this.eventName = React.createRef<HTMLInputElement>();
    this.eventPlace = React.createRef<HTMLInputElement>();
    this.eventDate = React.createRef<HTMLInputElement>();
    this.eventTheme = themes.map(() => React.createRef<HTMLInputElement>());
    this.eventLang = React.createRef<HTMLSelectElement>();
    this.eventType = types.map(() => React.createRef<HTMLInputElement>());
    this.eventPoster = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <form className="event-form" onSubmit={this.handleSubmit.bind(this)}>
        <p className="event-form__label">Give your event a name:</p>
        <TextInput id="name" className="event-form__input input-name" reference={this.eventName} />
        <p className="event-form__label">Provide the held date:</p>
        <DateInput className="event-form__input input__date" reference={this.eventDate} />
        <p className="event-form__label">What are you planning to discuss?</p>
        {themes.map((theme, index) => (
          <CheckboxInput
            key={theme}
            className="event-form__input input-checkbox"
            label={theme}
            id={theme}
            reference={this.eventTheme[index]}
          />
        ))}
        <p className="event-form__label">Which language will your group speak?</p>
        <Select
          className="event-form__input select"
          defaultText="Language"
          options={langs}
          reference={this.eventLang}
        />
        <p className="event-form__label">Type of event:</p>
        {types.map((type, index) => (
          <RadioInput
            key={type}
            className="event-form__input input-radio"
            label={type}
            name="place"
            reference={this.eventType[index]}
          />
        ))}
        <p className="event-form__label">Link or Address where your event will take place:</p>
        <TextInput
          id="place"
          className="event-form__input input-place"
          reference={this.eventPlace}
        />
        <p className="event-form__label">Upload a poster for your event:</p>
        <FileInput className="event-form__input input-file" reference={this.eventPoster} />
        <input className="input-submit" type="submit" />
      </form>
    );
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
}

export { Form };
