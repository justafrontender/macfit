import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    const { cart, siteMenu } = this.props;
    const counter = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    return (
      <header className='page-header page-header--fixed'>
        <div className='container page-header__container'>
          <Logo />
          <MenuToggler onClick={this.menuToggle} counter={counter} />
          <MainNav
            menuItems={siteMenu}
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
  menuOpenedInitially: PropTypes.bool
};

PageHeader.defaultProps = {
  menuOpenedInitially: false
};

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps, null, null, { pure: false })(PageHeader);
