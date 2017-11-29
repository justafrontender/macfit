import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import MenuToggler from '../MenuToggler';
import MainNav from '../MainNav';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpened: this.props.menuOpenedInitially
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ menuOpened: !this.state.menuOpened });
  }

  render() {
    return (
      <header className='page-header page-header--fixed'>
        <div className='container page-header__container'>
          <Logo />
          <MenuToggler clickHandler={this.handleClick} counter={this.props.basketItems} />
          <MainNav
            menuItems={this.props.siteMenu}
            menuOpened={this.state.menuOpened}
            counter={this.props.basketItems}
          />
        </div>
      </header>
    );
  }
}

PageHeader.propTypes = {
  menuOpenedInitially: PropTypes.bool
};

PageHeader.defaultProps = {
  menuOpenedInitially: false
};

export default PageHeader;
