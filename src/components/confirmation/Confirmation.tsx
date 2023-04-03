import { FormsPageState } from 'types/types';
import './confirmation.scss';

const Confirmation = (props: Pick<FormsPageState, 'confirmation'>) => {
  return (
    <div>
      {props.confirmation ? <div className="confirmation-message">Card Created</div> : <div></div>}
    </div>
  );
};

export { Confirmation };
