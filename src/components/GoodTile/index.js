import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import PriceTag from '../PriceTag';

class GoodTile extends React.Component {
  constructor(props) {
    super(props);
    this.openDetails = this.openDetails.bind(this);
  }

  openDetails(e) {
    this.props.openDetails(e, this.props.i);
  }

  render() {
    return (
      <article className='good-tile' data-id={this.props.good.id}>
        <a
          className='good-tile__image'
          href='#'
          tabIndex='-1'
          onClick={this.openDetails}
        >
          <img src={this.props.good.pictures[0]} alt={this.props.good.name}/>
        </a>
        <div className='good-tile__specs'>
          <h3 className='good-tile__title'>
            <a href='#' onClick={this.openDetails}>{this.props.good.name}</a>
          </h3>
          <PriceTag price={this.props.good.price} weight={this.props.good.weight} />
          <Button className='good-tile__basket-btn' title='Добавить в заказ'>Добавить в заказ</Button>
        </div>
      </article>
    );
  }
}

GoodTile.propTypes = {
  good: PropTypes.object.isRequired,
  openDetails: PropTypes.func.isRequired,
  i: PropTypes.number
}

export default GoodTile;
