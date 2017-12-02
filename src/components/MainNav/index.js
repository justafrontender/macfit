import React from 'react';
import NavLink from 'react-router-dom/navlink';
import PropTypes from 'prop-types';
import B from '../../lib/B';
import hash from '../../lib/hash';
import Counter from '../Counter';

const b = B.lock('main-nav');

const MainNav = ({ menuOpened, menuItems, counter, onClick }) => {
  return (
    <nav className={b()}>
      <ul className={b('list', { visible: menuOpened })}>
        {
          !!counter &&
          <li>
            <NavLink
              className='main-nav__link'
              activeClassName='main-nav__link--active'
              to='/order'
              onClick={onClick}
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
            onClick={onClick}
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
              onClick={onClick}
            >
              {link.name}
              {link.counter ? <Counter number={counter} classMix='main-nav__counter' /> : ''}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MainNav.propTypes = {
  menuOpened: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
    counter: PropTypes.string
  })).isRequired
};

export default MainNav;
