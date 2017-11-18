import React from 'react';
import PropTypes from 'prop-types';
import B from '../../B';

let b = B.lock('main-nav');

const MainNav = ({ menuOpened, links }) => {
  return (
    <nav className={b()}>
      <ul className={b('list', {visible: menuOpened})}>
        {links.map((link, i) => (
          <li key={`MainNav_${i}`}>
            <a className='main-nav__link' href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
};

MainNav.propTypes = {
  menuOpened: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string
    })
  )
}

MainNav.defaultProps = {
  links: [
    {name: 'Еда', href: '#'},
    {name: 'Полуфабрикаты', href: '#'},
    {name: 'Качество', href: '#'},
    {name: 'Доставка и оплата', href: '#'},
    {name: 'Кто мы', href: '#'},
    {name: 'Контакты', href: '#'}
  ]
}

export default MainNav;
