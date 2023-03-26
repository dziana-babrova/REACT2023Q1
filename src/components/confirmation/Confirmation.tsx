import React from 'react';
import { FormsPageState } from 'types/types';
import './confirmation.scss';

class Confirmation extends React.Component<Pick<FormsPageState, 'confirmation'>> {
  render() {
    return (
      <div>
        {this.props.confirmation ? (
          <div className="confirmation-message">Card Created</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export { Confirmation };
