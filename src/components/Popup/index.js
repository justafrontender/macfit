import React from 'react';
import CircleBtn from '../CircleBtn';
import './style.scss';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  componentWillMount() {
    document.body.classList.add('body-fixed');
  }

  componentWillUnmount() {
    document.body.classList.remove('body-fixed');
  }

  onClose(evt) {
    if (evt.target !== evt.currentTarget) {
      return false;
    }
    if (this.props.history.action === 'PUSH') {
      this.props.history.goBack();
    }
    else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      // eslint-disable-next-line
      <div className='popup popup--visible' onClick={this.onClose}>
        <div className='popup__inner'>
          <div className='popup__controls'>
            <CircleBtn bemMod='x' type='button' onClick={this.onClose}>Закрыть</CircleBtn>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Popup;
