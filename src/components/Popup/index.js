import React from 'react';
import ReactDOM from 'react-dom';
import CircleBtn from '../CircleBtn';
import './style.scss';

class Popup extends React.Component {
  componentDidMount() {
    this.parentFocusedElement = document.activeElement;
    this.captureFocus();
    document.addEventListener(`focus`, this.captureFocus, 1);
    document.addEventListener(`keydown`, this.onEscPress, 1);
    document.body.classList.add('body-fixed');
  }

  componentWillUnmount() {
    document.removeEventListener(`focus`, this.captureFocus, 1);
    document.removeEventListener(`keydown`, this.onEscPress, 1);
    this.parentFocusedElement.focus();
    document.body.classList.remove('body-fixed');
  }

  onClose = evt => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  onEscPress = evt => {
    if (evt.keyCode === 27) {
      this.close();
    }
  };

  captureFocus = evt => {
    const box = ReactDOM.findDOMNode(this);
    if (!evt || (evt.target && !box.contains(evt.target))) {
      box.focus();
    }
  };

  close = () => {
    if (this.props.history.action === 'PUSH') {
      this.props.history.goBack();
    }
    else {
      this.props.history.push('/');
    }
  };

  render() {
    return (
      // eslint-disable-next-line
      <div className='popup popup--visible' onClick={this.onClose} tabIndex='0'>
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
