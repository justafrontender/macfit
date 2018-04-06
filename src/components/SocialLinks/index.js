import React from 'react';
import join from 'lodash/join';
import './style.scss';

const socials = [
  { id: 'vk', name: 'Вконтакте' },
  { id: 'fb', name: 'Facebook' },
  { id: 'insta', name: 'Instagram' }
];

const SocialLinks = ({ contacts: { socialLinks }, className }) => (
  <section className={join([className, 'social-links'], ' ')}>
    <span className='social-links__title'>Подружитесь с нами!</span>
    <ul className='social-links__list'>
      {
        socials.map(item => (
          <li key={item.id}>
            <a
              className={`social-links__link social-links__link--${item.id}`}
              href={socialLinks[item.id]}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.name}
            </a>
          </li>
        ))
      }
    </ul>
  </section>
);

export default SocialLinks;
