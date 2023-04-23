import { useSelector } from 'react-redux';
import { Loader } from 'components/loader/Loader';
import { RootState } from 'state/store/store';
import { getCharacterState } from 'state/reducers/characterReducer';
import './modal.scss';

type ModalProps = {
  closeModal: () => void;
};

export const Modal = ({ closeModal }: ModalProps) => {
  const status = useSelector((state: RootState) => state.character.isLoading);
  const card = useSelector(getCharacterState);

  function selectColor(status: string) {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'card-status_alive';
      case 'dead':
        return 'card-status_dead';
      default:
        return 'card-status_unknown';
    }
  }

  return (
    <div>
      <div className="overlay" onClick={closeModal}></div>
      <div className="popup">
        {status ? (
          <Loader />
        ) : card ? (
          <div className="popup-card">
            <img className="popup-card__image" src={card.image} alt={card.name} />
            <div className="popup-card__content">
              <span className="popup-card__name">{card.name} </span>
              <span className={'popup-card__status ' + selectColor(card.status)}>
                {card.status}
              </span>
              <span className="popup-card__gender">
                <span className="popup-card__label">Gender:</span> {card.gender}
              </span>
              <span className="popup-card__species">
                <span className="popup-card__label">Species:</span> {card.species}
              </span>
              <span className="popup-card__type">
                <span className="popup-card__label">Type:</span> {card.type}
              </span>
              <p className="popup-card__location">
                <span className="popup-card__label">Location:</span> {card.location.name}
              </p>
            </div>
          </div>
        ) : (
          <div>An error occurred. Try again later</div>
        )}
        <span className="popup__close-button" onClick={closeModal}></span>
      </div>
    </div>
  );
};
