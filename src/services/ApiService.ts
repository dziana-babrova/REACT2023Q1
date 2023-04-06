import { CardProps } from 'components/cards/Card';

type setCardsFunc = React.Dispatch<React.SetStateAction<CardProps[]>>;

export const getCharacters = async (setCards: setCardsFunc, searchValue: string) => {
  fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
    .then((response) => response.json())
    .then((data) => setCards(data.results));
};
