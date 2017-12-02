import React from 'react';

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

  onClose() {
    if (this.props.history.action === 'PUSH') {
      this.props.history.goBack();
    }
    else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className='popup popup--visible'>
        <div className='popup__inner'>
          <div className='popup__controls'>
            <button className='circle-btn circle-btn--x' type='button' onClick={this.onClose}>Закрыть</button>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Popup;
