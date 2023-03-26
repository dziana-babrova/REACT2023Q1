import { TextInput } from 'components/inputs/text/TextInput';
import { DateInput } from 'components/inputs/date/DateInput';
import { FileInput } from 'components/inputs/file/FileInput';
import { CheckboxInput } from 'components/inputs/checkbox/CheckboxInput';
import { RadioInput } from 'components/inputs/radio/RadioInput';
import React from 'react';
import { Select } from 'components/inputs/select/Select';
import {
  validateDate,
  validateLang,
  validateName,
  validatePlace,
  validatePoster,
  validateTheme,
  validateType,
} from 'services/ValidationService';
import { formProps, formState } from 'types/types';

const langs = ['English', 'German', 'French', 'Italian', 'Chinese'];
const types = ['online', 'offline'];
const themes = ['character', 'episode', 'season', 'news about show'];

class Form extends React.Component<formProps, formState> {
  eventName: React.RefObject<HTMLInputElement>;
  eventPlace: React.RefObject<HTMLInputElement>;
  eventDate: React.RefObject<HTMLInputElement>;
  eventTheme: React.RefObject<HTMLInputElement>[];
  eventLang: React.RefObject<HTMLSelectElement>;
  eventType: React.RefObject<HTMLInputElement>[];
  eventPoster: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: formProps) {
    super(props);
    this.eventName = React.createRef<HTMLInputElement>();
    this.eventPlace = React.createRef<HTMLInputElement>();
    this.eventDate = React.createRef<HTMLInputElement>();
    this.eventTheme = themes.map(() => React.createRef<HTMLInputElement>());
    this.eventLang = React.createRef<HTMLSelectElement>();
    this.eventType = types.map(() => React.createRef<HTMLInputElement>());
    this.eventPoster = React.createRef<HTMLInputElement>();
    this.formRef = React.createRef<HTMLFormElement>();
    this.state = { name: '', place: '', date: '', theme: '', lang: '', type: '', poster: '' };
  }

  render() {
    return (
      <div className="form-background">
        <form className="event-form" onSubmit={this.handleSubmit.bind(this)} ref={this.formRef}>
          <p className="event-form__label">Give your event a name:</p>
          <TextInput
            id="name"
            className="event-form__input input-name"
            reference={this.eventName}
            errorMessage={this.state.name}
          />
          <p className="event-form__label">Provide the held date:</p>
          <DateInput
            className="event-form__input input__date"
            reference={this.eventDate}
            errorMessage={this.state.date}
          />
          <p className="event-form__label">What are you planning to discuss?</p>
          {themes.map((theme, index) => (
            <CheckboxInput
              key={theme}
              className="event-form__input input-checkbox"
              label={theme}
              id={theme}
              reference={this.eventTheme[index]}
              errorMessage={index === themes.length - 1 ? this.state.theme : ''}
            />
          ))}
          <p className="event-form__label">Which language will your group speak?</p>
          <Select
            className="event-form__input select"
            defaultText="Language"
            options={langs}
            reference={this.eventLang}
            errorMessage={this.state.lang}
          />
          <p className="event-form__label">Type of event:</p>
          {types.map((type, index) => (
            <RadioInput
              key={type}
              className="event-form__input input-radio"
              label={type}
              name="place"
              reference={this.eventType[index]}
              errorMessage={index === types.length - 1 ? this.state.type : ''}
            />
          ))}
          <p className="event-form__label">Link or Address where your event will take place:</p>
          <TextInput
            id="place"
            className="event-form__input input-place"
            reference={this.eventPlace}
            errorMessage={this.state.place}
          />
          <p className="event-form__label">Upload a poster for your event:</p>
          <FileInput
            className="event-form__input input-file"
            reference={this.eventPoster}
            errorMessage={this.state.poster}
          />
          <input className="input-submit" type="submit" />
        </form>
      </div>
    );
  }

  handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();
      this.validate();
      if (Object.values(this.state).some((state) => state !== '')) return;
      this.props.create({
        name: this.eventName.current!.value,
        place: this.eventPlace.current!.value,
        date: this.eventDate.current!.value,
        lang: this.eventLang.current!.value,
        image: URL.createObjectURL(this.eventPoster.current!.files![0]),
        type: this.eventType[0].current!.checked
          ? this.eventType[0].current!.value
          : this.eventType[1].current!.value,
        theme: this.eventTheme.reduce((themes: string[], theme) => {
          if (theme.current?.checked) {
            themes.push(theme.current.value);
          }
          return themes;
        }, []),
      });
      this.formRef.current?.reset();
    } catch {
      console.log();
    }
  }

  validate() {
    this.setState({ name: validateName(this.eventName) });
    this.setState({ date: validateDate(this.eventDate) });
    this.setState({ theme: validateTheme(this.eventTheme) });
    this.setState({ lang: validateLang(this.eventLang, langs) });
    this.setState({ type: validateType(this.eventType) });
    this.setState({ place: validatePlace(this.eventPlace) });
    this.setState({ poster: validatePoster(this.eventPoster) });
  }
}

export { Form };
