import React from 'react';
import PageHeader from '../PageHeader';
import PageContent from '../PageContent';
import PageFooter from '../PageFooter';
import Popup from '../Popup';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.openGoodDetails = this.openGoodDetails.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openGoodDetails(key) {
    console.log(this.props.goodsList[key]);
    this.setState({ openedPopupContent: { type: 'good', content: this.props.goodsList[key]} });
  }

  closePopup() {
    this.setState({ openedPopupContent: false });
  }

  render() {
    return (
      <div>
        <PageHeader />

        <PageContent goods={this.props.goodsList} onOpenGoodDetails={this.openGoodDetails} />

        <PageFooter />

        {
          (this.state && this.state.openedPopupContent)?
          <Popup popupContent={this.state.openedPopupContent} closePopup={this.closePopup} />:
          false
        }

      </div>
    );
  }
}

export default App;
