import React from 'react';
import PageHeader from '../PageHeader';
import PageContent from '../PageContent';
import PageFooter from '../PageFooter';
import Popup from '../Popup';
import GoodsList from '../GoodsList';
import GoodDetails from '../GoodDetails';
import Order from '../order';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderFields: this.props.orderData.fields,
      basket: this.props.orderData.basket
    };

    this.openGoodDetails = this.openGoodDetails.bind(this);
    this.openOrderPopup = this.openOrderPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.updateOrderField = this.updateOrderField.bind(this);
  }

  openGoodDetails(event, key) {
    event.preventDefault();
    this.setState({
      openedPopup: 'good',
      popupContent: this.props.goodsList[key]
    });
  }

  openOrderPopup() {
    this.setState({ openedPopup: 'order' });
  }

  closePopup() {
    this.setState({
      openedPopup: false,
      popupContent: undefined
    });
  }

  updateOrderField(event) {
    let name = event.target.name, value = event.target.value;
    this.setState(prevState => {
      prevState.orderFields[name] = value;
      return { orderFields: prevState.orderFields };
    });
  }

  render() {
    return (
      <div>
        <PageHeader siteMenu={this.props.siteMenu} basket={this.state.basket} />

        <PageContent>
          <GoodsList
            goods={this.props.goodsList}
            openGoodDetails={this.openGoodDetails}
          />
        </PageContent>

        <PageFooter />

        <button onClick={this.openOrderPopup} type='button'>Order</button>

        {
          (this.state && this.state.openedPopup == 'good') &&
          <Popup closePopup={this.closePopup}>
            <GoodDetails content={this.state.popupContent} />
          </Popup>
        }

        {
          (this.state && this.state.openedPopup == 'order') &&
          <Popup closePopup={this.closePopup}>
            <Order
              goods={this.props.goodsList}
              deliveryTypes={this.props.deliveryTypes}
              orderFields={this.state.orderFields}
              basket={this.state.basket}
              onOrderFieldChange={this.updateOrderField}
            />
          </Popup>
        }

      </div>
    );
  }
}

export default App;
