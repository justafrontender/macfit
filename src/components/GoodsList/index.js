import React from 'react';
import PropTypes from 'prop-types';
import { addItem } from '../../actions/cart';
import GoodTile from '../GoodTile';

class GoodsList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = this.context.store;

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    this.unsubscribeStore = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  handleAddToCart(productId) {
    this.store.dispatch(addItem(productId, 1));
  }

  render() {
    return (
      <section className='goods-list'>
        <h2 className='goods-list__title'>{this.props.heading}</h2>

        {this.props.catalog.map(item => {
          return (
            <GoodTile
              good={item}
              key={item.id}
              onAddToCart={this.handleAddToCart}
            />
          );
        })}
      </section>
    );
  }
}

GoodsList.contextTypes = {
  store: PropTypes.shape({})
};

GoodsList.propTypes = {
  heading: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    weight: PropTypes.number
  }))
};

GoodsList.defaultProps = {
  heading: 'Меню MacFit',
};

export default GoodsList;
