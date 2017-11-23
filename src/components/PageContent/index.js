import React from 'react';

const PageContent = props => (
  <main className='page-content'>
    <div className='container container--space'>
      <h1 className='page-title page-title--hidden'>MacFit - фастфуд, который можно</h1>
      {props.children}
    </div>
  </main>
);

export default PageContent;
