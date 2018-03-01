import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class FieldText extends React.Component {
  render() {
    return (
      <label className={`field-text ${this.props.classMix}`}>
        <span className='field-text__name'>{this.props.title}:</span>
        {
          this.props.type === 'textarea' ?
            <textarea
              className='field-text__input'
              name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.props.value}
              required
              onChange={this.props.onChange}
            /> :
            <input
              className='field-text__input'
              type={this.props.type}
              name={this.props.name}
              placeholder={this.props.placeholder}
              value={this.props.value}
              required
              onChange={this.props.onChange}
            />
        }
      </label>
    );
  }
}

FieldText.propTypes = {
  classMix: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

FieldText.defaultProps = {
  type: 'text'
};

export default FieldText;
