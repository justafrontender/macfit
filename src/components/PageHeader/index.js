import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartItemsCount } from '../../reducers/cart';
import Logo from '../Logo';
import MenuToggler from '../MenuToggler';
import MainNav from '../MainNav';
import './style.scss';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.menuToggle = this.menuToggle.bind(this);
    this.menuClose = this.menuClose.bind(this);
  }

  state = {
    isMenuOpened: this.props.menuOpenedInitially
  };

  menuToggle() {
    this.setState(prevState => ({ isMenuOpened: !prevState.isMenuOpened }));
  }

  menuClose() {
    this.setState(prevState => ({ isMenuOpened: prevState ? false : null }));
  }

  render() {
    const { counter, siteMenu, productGroups } = this.props;

    const menuItems = [].concat(
      productGroups.map(group => ({
        name: group.name,
        href: `/${group.code}`
      })),
      siteMenu
    );

    return (
      <header className='page-header page-header--fixed'>
        <div className='container page-header__container'>
          <Logo />
          <MenuToggler onClick={this.menuToggle} counter={counter} />
          <MainNav
            menuItems={menuItems}
            isOpened={this.state.isMenuOpened}
            onClose={this.menuClose}
            counter={counter}
          />
        </div>
      </header>
    );
  }
}

PageHeader.propTypes = {
  menuOpenedInitially: PropTypes.bool,
  productGroups: PropTypes.arrayOf(PropTypes.shape({})),
  siteMenu: PropTypes.arrayOf(PropTypes.shape({}))
};

PageHeader.defaultProps = {
  menuOpenedInitially: false,
  productGroups: [],
  siteMenu: []
};

const mapStateToProps = state => ({
  counter: cartItemsCount(state.cart),
  productGroups: state.productGroups,
});

export default connect(mapStateToProps, null, null, { pure: false })(PageHeader);
