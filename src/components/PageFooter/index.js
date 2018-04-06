import React from 'react';
import SocialLinks from 'components/SocialLinks';
import './style.scss';

const PageFooter = ({ contacts }) => (
  <footer className='page-footer'>
    <div className='container container--space page-footer__container'>
      <section className='page-footer__section footer-contacts '>
        <p>
          {contacts.address}<br />
          <a
            className='footer-contacts__link footer-contacts__link--phone'
            href={`tel:${contacts.phone}`}
          >
            {contacts.phone}
          </a>
        </p>
      </section>

      <SocialLinks className='page-footer__section' contacts={contacts} />

      <section className='page-footer__section copyright'>
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
