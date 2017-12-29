import React from 'react';
import iconVk from './img/icon-vk.svg';
import iconFb from './img/icon-fb.svg';
import iconInsta from './img/icon-insta.svg';
import './style.scss';

const PageFooter = () => (
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
            +7 (960) 480-14-01
          </a>
        </p>
      </section>

      <section className='social-links'>
        <span>Подружитесь с нами!</span>
        <ul className='social-links__list'>
          <li>
            <a
              className='social-links__link social-links__link--vk'
              href='https://vk.com/eatfit_family'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg>
                <use xlinkHref={iconVk} />
              </svg>
              Вконтакте
            </a>
          </li>

          <li>
            <a
              className='social-links__link social-links__link--fb'
              href='https://www.facebook.com/EatFit.family'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg>
                <use xlinkHref={iconFb} />
              </svg>
              Facebook
            </a>
          </li>

          <li>
            <a
              className='social-links__link social-links__link--insta'
              href='https://www.instagram.com/macfit_krd/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg>
                <use xlinkHref={iconInsta} />
              </svg>
              Instagram
            </a>
          </li>
        </ul>
      </section>

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
