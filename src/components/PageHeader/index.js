import React from 'react';
import PropTypes from 'prop-types';
import MainNav from '../MainNav';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpened: this.props.menuOpenedInitially
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({menuOpened: !this.state.menuOpened}, () => this.render());
  }

  render() {
    return (
      <header className='page-header'>
        <div className='container page-header__container'>
          <a className='logo'>
            <img src='img/logo.svg' alt='MacFit'/>
          </a>

          <button className='menu-toggler' type='button' onClick={this.handleClick}>
            <i></i>
          </button>

          <MainNav menuOpened={this.state.menuOpened} />
        </div>
      </header>
    );
  }
}

PageHeader.propTypes = {
  menuOpenedInitially: PropTypes.bool
}

PageHeader.defaultProps = {
  menuOpenedInitially: false
}

export default PageHeader;
