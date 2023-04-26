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
  date: '05052022',
  theme: ['character', 'season'],
  language: 'French',
  type: 'offline',
  place: 'test address',
  poster: './../../src/assets/back.jpg',
};
