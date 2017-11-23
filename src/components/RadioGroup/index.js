import React from 'react';

const RadioGroup = ({ title, name, children, onChange }) => (
  <div className='radio-group'>
    <span className='radio-group__name'>{title}</span>
    <div className='radio-group__inner'>
      {React.Children.map(
        children,
        child => React.cloneElement(child, { name, onChange })
      )}
    </div>
  </div>
);

export default RadioGroup;
