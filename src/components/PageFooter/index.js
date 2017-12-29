import React from 'react';
import SocialLinks from '../SocialLinks';
import './style.scss';

const PageFooter = ({ contacts }) => (
  <footer className='page-footer'>
    <div className='container container--space page-footer__container'>
      <section className='footer-contacts'>
        <p>
          Краснодар<br />
          ул. Индустриальная, 3<br />
          <a
            className='footer-contacts__link footer-contacts__link--phone'
            href='tel:+79604801401'
          >
            {contacts.phone}
          </a>
        </p>
      </section>

      <SocialLinks contacts={contacts} />

      <section className='copyright'>
        {'Разработал '}
        <a
          className='copyright__link'
          href='https://github.com/justafrontender'
          target='_blank'
          rel='noopener noreferrer'
        >
          RGBabaev
        </a>
      </section>
    </div>
  </footer>
);

export default PageFooter;
