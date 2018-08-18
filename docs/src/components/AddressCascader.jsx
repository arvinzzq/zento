import React from 'react';
import { Cascader, message } from 'antd';
import PropTypes from 'prop-types';
import fetch from 'superagent';
import jsonp from 'superagent-jsonp';
import { FIELD_CUSTOMIZED } from '../../../lib/fieldSymbols';

const MESSAGE_DURATION = 5;
const foreignCode = '990000';
const noop = () => {};
const mapType = {
  Province: 'City',
  City: 'Area'
};

export default class HomeAddrCascader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  static propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    onChange: noop,
    placeholder: '',
    style: {}
  }

  static formFieldType = FIELD_CUSTOMIZED

  componentDidMount() {
    this.getProvince(res => {
      const options = this.dataFormat(res.data, 'Province', {
        label: '外籍',
        type: 'Province',
        value: foreignCode,
        isLeaf: true
      });
      this.setState({ options });
    });
  }

  onChange = value => {
    this.props.onChange(value);
  }

  getProvince(callback) {
    this.ajaxJsonpGet('https://koudaitong.com/v2/common/region/provinceList.jsonp', callback);
  }

  getCity(provinceId, callback) {
    this.ajaxJsonpGet(`https://koudaitong.com/v2/common/region/list.jsonp?region_id=${provinceId}`, callback);
  }

  getArea(cityId, callback) {
    this.ajaxJsonpGet(`https://koudaitong.com/v2/common/region/list.jsonp?region_id=${cityId}`, callback);
  }

  dataFormat = (data = {}, type, customizedData) => {
    const options = Object.keys(data).map(code => ({
      value: code,
      label: data[code],
      type,
      isLeaf: type === 'Area'
    }));
    if (customizedData) {
      options.push(customizedData);
    }
    return options;
  }

  ajaxJsonpGet(url, callback) {
    fetch
      .get(url)
      .use(jsonp({
        timeout: 3000
      }))
      .end((err, res) => {
        if (err || res.body.code !== 0) {
          message.error(err || res.body.msg, MESSAGE_DURATION);
        } else {
          callback(res.body);
        }
      });
  }

  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    this[`get${mapType[targetOption.type]}`](targetOption.value, res => {
      targetOption.loading = false;
      const options = this.dataFormat(res.data, mapType[targetOption.type]);
      targetOption.children = options;
      this.setState({
        options: [...this.state.options],
      });
    });
  }

  render() {
    const { placeholder, style } = this.props;
    return (
      <Cascader
        {...this.props}
        style={style}
        placeholder={placeholder}
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}
