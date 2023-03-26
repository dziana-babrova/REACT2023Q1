import { useLocation } from 'react-router-dom';

export type SetActiveFunction = (props: {
  isActive: boolean;
  isPending: boolean;
}) => string | undefined;

export type HeaderProps = {
  location: Location;
};

export type SearchProps = {
  submitValue: string;
};

export type SearchState = {
  value: string;
};

export type CardProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export type CheckboxInputProps = {
  className: string;
  id: string;
  label: string;
  reference: React.RefObject<HTMLInputElement>;
  errorMessage: string;
};

export type DateInputProps = {
  className: string;
  reference: React.RefObject<HTMLInputElement>;
  errorMessage: string;
};

export type FileInputProps = {
  className: string;
  reference: React.RefObject<HTMLInputElement>;
  errorMessage: string;
};

export type RadioInputProps = {
  className: string;
  label: string;
  name: string;
  reference: React.RefObject<HTMLInputElement>;
  errorMessage: string;
};

export type SelectProps = {
  className: string;
  defaultText: string;
  options: string[];
  reference: React.RefObject<HTMLSelectElement>;
  errorMessage: string;
};

export type TextInputProps = {
  className: string;
  id: string;
  reference: React.RefObject<HTMLInputElement>;
  errorMessage: string;
};

export type formState = {
  name: string;
  place: string;
  date: string;
  theme: string;
  lang: string;
  type: string;
  poster: string;
};

export type Card = {
  name: string;
  place: string;
  date: string;
  theme: string[];
  lang: string;
  type: string;
  image: string;
};

export type FormsPageState = {
  cards: Card[];
};

export type formProps = {
  create: (newCard: Card) => void;
};
