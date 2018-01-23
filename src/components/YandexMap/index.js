import React from 'react';
import b from '../../lib/b';
import './style.scss';

/* eslint-disable no-undef */
class YandexMap extends React.Component {
  constructor(props) {
    super(props);

    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    if ('ymaps' in window) {
      this.initMap();
    }
    else {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.addEventListener('load', this.initMap);
      document.body.appendChild(script);
    }
  }

  initMap() {
    ymaps.ready(() => {
      this.map = new ymaps.Map('ymap', {
        center: this.props.mapCenter,
        zoom: 15,
        controls: ['zoomControl']
      });

      const fullscreenControl = new ymaps.control.FullscreenControl();
      this.map.controls.add(fullscreenControl);
      this.map.behaviors.disable('scrollZoom');

      // разрешаем перетаскивать карту только в фулскрин режиме
      if (window.innerWidth <= 767) {
        this.map.behaviors.disable('drag');
        fullscreenControl.events.add('fullscreenenter', () => {
          this.map.behaviors.enable('drag');
        });
        fullscreenControl.events.add('fullscreenexit', () => {
          this.map.behaviors.disable('drag');
        });
      }
    });
  }

  render() {
    return (
      <div className={b('yandex-map', false, this.props.className)} id='ymap' />
    );
  }
}

export default YandexMap;
