import './confirmation.scss';

type ConfirmationProps = {
  confirmation: boolean;
};

const Confirmation = ({ confirmation }: ConfirmationProps) => {
  return (
    <div>
      {confirmation ? <div className="confirmation-message">Card Created</div> : <div></div>}
    </div>
  );
};

export { Confirmation };
