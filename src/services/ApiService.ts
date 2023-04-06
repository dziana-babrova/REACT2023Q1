import { CardProps } from 'components/cards/Card';

export const getCharacters = async (searchValue: string): Promise<CardProps[]> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`);
    const data = await response.json();
    return data.results;
  } catch {
    console.log('Data is not fetched');
    return [];
  }
};
