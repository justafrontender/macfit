import React from 'react';

class Popup extends React.Component {
  componentWillMount() {
    document.body.classList.add('body-fixed');
  }

  componentWillUnmount() {
    document.body.classList.remove('body-fixed');
  }

  render() {
    return (
      <div className='popup popup--visible'>
        <div className='popup__inner'>
          <div className='popup__controls'>
            <button className='circle-btn circle-btn--x' type='button' onClick={this.props.closePopup}>Закрыть</button>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Popup;
