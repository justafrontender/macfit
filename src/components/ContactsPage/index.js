import React from 'react';
import PageTitle from '../PageTitle';
import YandexMap from '../YandexMap';
import './style.scss';

class ContactsPage extends React.Component {
  render() {
    return ([
      <PageTitle key='0'>Контакты</PageTitle>,
      <YandexMap className='contacts-page__map' key='1' mapCenter={this.props.contacts.mapCoordinates} />
    ]);
  }
}

export default ContactsPage;
