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
import 'antd/dist/antd.css';
import './index.scss';

const FormItem = Form.Item;

const { fieldNames } = fieldNameRuleCreator(fieldInitValueMap)(infoForm);
const fieldCreator = fieldComponentCreator(componentMap, formFieldOptions);
const formFieldRender = (bindField, config) => {
  const { label, name, fieldType, extra, rule } = config;
  return (
    <FormItem colon label={label}>
       {bindField(name, {
         rules: [rule],
       })(fieldCreator(fieldType, name, extra))}
     </FormItem>
  );
};

const formCreator = new FormCreator({ formFieldRender });

const getStyleWrapper = () => ({
  padding: 30,
  boxSizing: 'border-box',
  width: 1100,
  margin: '0 auto',
  border: '1px solid #e5e5e5'
});

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      ...fieldNames
    };
  }

  handlePanelClick = activeIndex => this.state.activeIndex !== activeIndex && this.setState({ activeIndex })

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('values -> ', this.props.form.getFieldsValue());
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { activeIndex } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={getStyleWrapper()}>
        <Tabs data={infoForm} activeIndex={activeIndex} handlePanelClick={this.handlePanelClick} />
        <Form layout="inline">
          {formCreator.create(infoForm, getFieldDecorator, [activeIndex])}
        </Form>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
      </div>
    );
  }
}

const HelloForm = Form.create()(Hello);


ReactDOM.render(<HelloForm />, document.getElementById('app'));


