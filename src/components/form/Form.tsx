import { TextInput } from 'components/inputs/text/TextInput';
import { DateInput } from 'components/inputs/date/DateInput';
import { FileInput } from 'components/inputs/file/FileInput';
import { CheckboxInput } from 'components/inputs/checkbox/CheckboxInput';
import { RadioInput } from 'components/inputs/radio/RadioInput';
import { Select } from 'components/inputs/select/Select';
import { useForm } from 'react-hook-form';
import { eventFormValidation } from 'consts/formValidationRules';

export type Card = {
  name: string;
  place: string;
  date: string;
  theme: string[];
  lang: string;
  type: string;
  image: string;
};

export type formProps = {
  create: (newCard: Card) => void;
};

type FormProps = {
  name: string;
  place: string;
  date: Date;
  lang: string;
  poster: FileList;
  type: string;
  theme: string[];
};

const langs = ['English', 'German', 'French', 'Italian', 'Chinese'];
const types = ['online', 'offline'];
const themes = ['character', 'episode', 'season', 'news about show'];

const Form = ({ create }: formProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormProps>({ reValidateMode: 'onSubmit', mode: 'onSubmit' });

  const onSubmit = () => {
    const card = getValues();
    create({
      name: card.name,
      place: card.place,
      date: card.date.toLocaleDateString(),
      lang: card.lang,
      image: URL.createObjectURL(card.poster[0]),
      type: card.type,
      theme: card.theme,
    });
    reset();
  };

  return (
    <div className="form-background">
      <form className="event-form" onSubmit={handleSubmit(onSubmit)}>
        <p className="event-form__label">Give your event a name:</p>
        <TextInput
          id="name"
          className="event-form__input input-name"
          register={register('name', eventFormValidation.name)}
          errorMessage={typeof errors.name?.message === 'string' ? errors.name.message : ''}
        />
        <p className="event-form__label">Provide the held date:</p>
        <DateInput
          className="event-form__input input__date"
          register={register('date', eventFormValidation.date)}
          errorMessage={typeof errors.date?.message === 'string' ? errors.date?.message : ''}
        />
        <p className="event-form__label">What are you planning to discuss?</p>
        {themes.map((theme, index) => (
          <CheckboxInput
            key={theme}
            className="event-form__input input-checkbox"
            label={theme}
            id={theme}
            register={register('theme', eventFormValidation.theme)}
            errorMessage={
              index === themes.length - 1 && typeof errors.theme?.message === 'string'
                ? errors.theme.message
                : ''
            }
          />
        ))}
        <p className="event-form__label">Which language will your group speak?</p>
        <Select
          className="event-form__input select"
          defaultText="Language"
          options={langs}
          register={register('lang', eventFormValidation.lang)}
          errorMessage={typeof errors.lang?.message === 'string' ? errors.lang.message : ''}
        />
        <p className="event-form__label">Type of event:</p>
        {types.map((type, index) => (
          <RadioInput
            key={type}
            className="event-form__input input-radio"
            label={type}
            register={register('type', eventFormValidation.type)}
            name="type"
            errorMessage={
              index === types.length - 1 && typeof errors.type?.message === 'string'
                ? errors.type.message
                : ''
            }
          />
        ))}
        <p className="event-form__label">Link or Address where your event will take place:</p>
        <TextInput
          id="place"
          className="event-form__input input-place"
          register={register('place', eventFormValidation.place)}
          errorMessage={typeof errors.place?.message === 'string' ? errors.place.message : ''}
        />
        <p className="event-form__label">Upload a poster for your event:</p>
        <FileInput
          className="event-form__input input-file"
          register={register('poster', eventFormValidation.poster)}
          errorMessage={typeof errors.poster?.message === 'string' ? errors.poster?.message : ''}
        />
        <input className="input-submit" type="submit" />
      </form>
    </div>
  );
};

export { Form };
