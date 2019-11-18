import React from 'react';

import './Modal.scss';

export default class Modal extends React.PureComponent {
  render() {
    return (
      <div className="Modal" onClick={this.props.onClose}>
        <div className="Modal-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}