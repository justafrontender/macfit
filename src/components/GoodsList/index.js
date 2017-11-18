import React from 'react';
import PropTypes from 'prop-types';
import GoodTile from '../GoodTile';

class GoodsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className='goods-list'>
        <h2 className='goods-list__title'>{this.props.heading}</h2>

        {this.props.goods.map((item, i) => {
          return (
            <GoodTile good={item} key={i} onTitleClick={() => this.props.onOpenGoodDetails(i)} />
          )
        })}
      </section>
    );
  }
}

GoodsList.propTypes = {
  heading: PropTypes.string,
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
      weight: PropTypes.number
    })
  ),
  onOpenGoodDetails: PropTypes.func.isRequired
}

GoodsList.defaultProps = {
  heading: 'Меню MacFit',
}

export default GoodsList;
