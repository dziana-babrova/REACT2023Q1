import path from 'path';

export type EventPositiveFlowType = {
  name: string;
  date: string;
  theme: string[];
  language: string;
  type: string;
  place: string;
  poster: string;
};

export const eventPositiveFlow: EventPositiveFlowType = {
  name: 'test Name',
  date: '2023-07-07',
  theme: ['character', 'season'],
  language: 'French',
  type: 'offline',
  place: 'test address',
  poster: './cypress/e2e/business objects/back.jpg',
};

export const searchValues = {
  positive: ['Rick', 'Morty', 'Summer'],
  negative: ['fwwcfewf'],
};
