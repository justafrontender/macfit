import React from 'react';
import PropTypes from 'prop-types';
import B from '../../lib/B';
import hash from '../../lib/hash';
import Counter from '../Counter';

const b = B.lock('main-nav');

const MainNav = ({ menuOpened, menuItems, counter }) => {
  return (
    <nav className={b()}>
      <ul className={b('list', { visible: menuOpened })}>
        {menuItems.map(link => (
          <li key={hash(link.name)}>
            <a className='main-nav__link' href={link.href}>
              {link.name}
              {link.counter ? <Counter number={counter} classMix='main-nav__counter' /> : ''}
            </a>
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
