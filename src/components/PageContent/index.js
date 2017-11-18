import React from 'react';
import GoodsList from '../GoodsList';

const PageContent = ({ goods, onOpenGoodDetails }) => (
  <main className='page-content'>
    <div className='container container--space'>
      <h1 className='page-title page-title--hidden'>MacFit - фастфуд, который можно</h1>

      <GoodsList goods={goods} onOpenGoodDetails={onOpenGoodDetails} />

    </div>
  </main>
);

export default PageContent;
