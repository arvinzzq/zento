import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { FIELD_OPTIONS } from '../../../lib/fieldSymbols';

const Option = Select.Option;

export default class InfoSelect extends React.PureComponent {
  static propTypes = {
    options: PropTypes.array
  }

  static defaultProps = {
    options: []
  }

  static formFieldType = FIELD_OPTIONS

  render() {
    return (
      <Select {...this.props}>
        {this.props.options.map(option => (
          <Option key={option.value} value={option.value}>{option.title}</Option>
        ))}
      </Select>
    );
  }
}
