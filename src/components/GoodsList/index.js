import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../actions/cart';
import GoodTile from '../GoodTile';
import './style.scss';

class GoodsList extends React.Component {
  render() {
    const { heading, catalog, onAddToCart } = this.props;

    return (
      <section className='goods-list'>
        <h2 className='goods-list__title'>{heading}</h2>

        {catalog.map(item => {
          return (
            <GoodTile
              good={item}
              key={item.id}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </section>
    );
  }
}

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

const mapDispatchToProps = dispatch => ({ onAddToCart: id => dispatch(addItem(id)) });

export default connect(false, mapDispatchToProps)(GoodsList);
