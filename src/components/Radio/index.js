import React from 'react';
import './style.scss';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e);
  }

  render() {
    return (
      <div className='radio'>
        <input
          className='radio__input'
          type='radio'
          id={`radio_${this.props.name}_${this.props.value}`}
          name={this.props.name}
          value={this.props.value}
          onChange={this.onChange}
          checked={this.props.checked}
        />
        <label className='radio__label' htmlFor={`radio_${this.props.name}_${this.props.value}`}>
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Radio;
