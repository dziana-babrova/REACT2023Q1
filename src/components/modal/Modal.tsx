import './modal.scss';

type ModalProps = {
  id: number;
};

export const Modal = ({ id }: ModalProps) => {
  return (
    <div className="overlay">
      <div className="popup">{id}</div>
    </div>
  );
};
