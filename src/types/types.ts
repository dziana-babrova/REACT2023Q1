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
