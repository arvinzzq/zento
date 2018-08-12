import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form } from 'antd';
import FormCreator from '../../src/formCreator';
import fieldNameRuleCreator from '../../src/fieldNameRuleCreator';
import fieldComponentCreator from '../../src/fieldComponentCreator';
import Tabs from './components/Tabs';
import infoForm from './config/infoForm';
import fieldInitValueMap from './config/fieldInitValueMap';
import componentMap from './config/componentMap';
import formFieldOptions from './config/formFieldOptions';
import './index.css';

const FormItem = Form.Item;

const getStyleWrapper = () => ({
  padding: '30px 0px',
  boxSizing: 'border-box',
  width: 1000,
  margin: '0 auto',
  border: '1px solid #e5e5e5'
});

class Hello extends React.PureComponent {
  render() {
    return (
      <div style={getStyleWrapper()}>hello ~</div>
    );
  };
}

ReactDOM.render(<Hello />, document.getElementById('app'));


