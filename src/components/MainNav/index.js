import React from 'react';
import { findDOMNode } from 'react-dom';
import NavLink from 'react-router-dom/NavLink';
import PropTypes from 'prop-types';
import b from '../../lib/b';
import hash from '../../lib/hash';
import Counter from '../Counter';
import './style.scss';

class MainNav extends React.Component {
  componentWillUpdate(nextProps) {
    if (nextProps.isOpened && !this.props.isOpened) {
      document.addEventListener('click', this.onExternalClick);
    }
    if (!nextProps.isOpened && this.props.isOpened) {
      document.removeEventListener('click', this.onExternalClick);
    }
  }

  onExternalClick = evt => {
    if (!findDOMNode(this).contains(evt.target)) this.props.onClose();
  }

  render() {
    const { isOpened, menuItems, counter, onClose } = this.props;
    return (
      <nav className={b('main-nav')}>
        <ul className={b('main-nav__list', isOpened && 'visible')}>
          {
            !!counter &&
            <li>
              <NavLink
                className='main-nav__link'
                activeClassName='main-nav__link--active'
                to='/order'
                onClick={onClose}
              >
                Ваш заказ
                <Counter number={counter} classMix='main-nav__counter' />
              </NavLink>
            </li>
          }
          <li>
            <NavLink
              className='main-nav__link'
              activeClassName='main-nav__link--active'
              to='/'
              exact
              onClick={onClose}
            >
              Еда
            </NavLink>
          </li>
          {menuItems.map(link => (
            <li key={hash(link.name)}>
              <NavLink
                className='main-nav__link'
                activeClassName='main-nav__link--active'
                to={link.href}
                onClick={onClose}
              >
                {link.name}
                {link.counter ? <Counter number={counter} classMix='main-nav__counter' /> : ''}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

MainNav.propTypes = {
  isOpened: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
    counter: PropTypes.string
  })).isRequired
};

export default MainNav;
