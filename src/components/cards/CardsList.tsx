import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'store/Store';
import { getCharactersState, fetchCharacters } from 'reducers/CharactersReducer';
import { getSearchValue } from 'reducers/SearchReducer';
import { Card } from './Card';
import './cards.scss';

type CardsListProps = {
  openModal: (id: number) => void;
};

const CardsList = ({ openModal }: CardsListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector(getSearchValue);
  const cards = useSelector(getCharactersState);
  const status = useSelector((state: RootState) => state.characters.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters(searchValue));
    }
  }, [status, dispatch, searchValue]);

  return (
    <ul className="cards-list">
      {cards && cards.length > 0 ? (
        cards.map((card) => (
          <li
            onClick={openModal.bind(this, card.id)}
            value={card.id}
            className="card-container"
            key={'characterCard-' + card.id}
          >
            <Card {...card}></Card>
          </li>
        ))
      ) : (
        <div className="no-results-message">No characters found</div>
      )}
    </ul>
  );
};

export { CardsList };
