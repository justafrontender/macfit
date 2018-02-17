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
    menuOpened: this.props.menuOpenedInitially
  };

  menuToggle() {
    this.setState(prevState => ({ menuOpened: !prevState.menuOpened }));
  }

  menuClose() {
    this.setState(prevState => ({ menuOpened: prevState ? false : null }));
  }

  render() {
    const { counter, siteMenu, catalogSections } = this.props;

    const menuItems = [].concat(
      catalogSections.map(section => ({
        name: section.name,
        href: `/${section.code}`
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
            menuOpened={this.state.menuOpened}
            onClick={this.menuClose}
            counter={counter}
          />
        </div>
      </header>
    );
  }
}

PageHeader.propTypes = {
  menuOpenedInitially: PropTypes.bool,
  catalogSections: PropTypes.arrayOf(PropTypes.shape({})),
  siteMenu: PropTypes.arrayOf(PropTypes.shape({}))
};

PageHeader.defaultProps = {
  menuOpenedInitially: false,
  catalogSections: [],
  siteMenu: []
};

const mapStateToProps = state => ({
  counter: cartItemsCount(state.cart),
  catalogSections: state.catalogSections,
});

export default connect(mapStateToProps, null, null, { pure: false })(PageHeader);
