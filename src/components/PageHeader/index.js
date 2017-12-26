import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import MenuToggler from '../MenuToggler';
import MainNav from '../MainNav';

class PageHeader extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = this.context.store;

    this.state = {
      menuOpened: this.props.menuOpenedInitially
    };

    this.menuToggle = this.menuToggle.bind(this);
  }

  componentDidMount() {
    this.unsubscribeStore = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  menuToggle() {
    this.setState({ menuOpened: !this.state.menuOpened });
  }

  render() {
    const counter = this.store.getState().cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    return (
      <header className='page-header page-header--fixed'>
        <div className='container page-header__container'>
          <Logo />
          <MenuToggler onClick={this.menuToggle} counter={counter} />
          <MainNav
            menuItems={this.props.siteMenu}
            menuOpened={this.state.menuOpened}
            onClick={this.menuToggle}
            counter={counter}
          />
        </div>
      </header>
    );
  }
}

PageHeader.contextTypes = {
  store: PropTypes.shape({})
};

PageHeader.propTypes = {
  menuOpenedInitially: PropTypes.bool
};

PageHeader.defaultProps = {
  menuOpenedInitially: false
};

export default PageHeader;
