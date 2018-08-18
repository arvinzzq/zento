import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import { FIELD_OPTIONS } from '../../../lib/fieldSymbols';

const RadioGroup = Radio.Group;

export default class InfoRadio extends React.PureComponent {
  static propTypes = {
    options: PropTypes.array
  }

  static defaultProps = {
    options: []
  }

  static formFieldType = FIELD_OPTIONS

  render() {
    return (
      <RadioGroup {...this.props}>
        {this.props.options.map(option => (
          <Radio key={option.value} value={option.value}>
            {option.title}
          </Radio>
        ))}
      </RadioGroup>
    );
  }
}
