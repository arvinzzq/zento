import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { docco } from 'react-syntax-highlighter/styles/prism';
import FormCreator from '../../src/formCreator';
import fieldComponentCreator from '../../src/fieldComponentCreator';
import Tabs from './components/Tabs';
import infoForm from './config/infoForm';
import componentMap from './config/componentMap';
import formFieldOptions from './config/formFieldOptions';
import { reactCode, componentMapCode } from './code';
import './index.scss';

const FormItem = Form.Item;
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

const infoFormCode = JSON.stringify(infoForm, null, 2);
const formFieldOptionsCode = JSON.stringify(formFieldOptions, null, 2);

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
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
      <div style={{ width: 1100, margin: '0 auto' }}>
        <div
          style={{
            padding: 30,
            boxSizing: 'border-box',
            border: '1px solid #e5e5e5'
          }}
        >
          <h1 style={{ textAlign: 'center', paddingBottom: 20 }}>Zento 🍱</h1>
          <Tabs data={infoForm} activeIndex={activeIndex} handlePanelClick={this.handlePanelClick} />
          <Form layout="inline">
            {formCreator.create(infoForm, getFieldDecorator, [activeIndex])}
          </Form>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          </div>
        </div>
        <div style={{ paddingTop: 20 }}>
          <h2>Code Snippet</h2>
          <h3>Demo</h3>
          <SyntaxHighlighter language='javascript' style={docco}>{reactCode}</SyntaxHighlighter>
          <h3>infoForm</h3>
          <SyntaxHighlighter language='javascript' style={docco}>{infoFormCode}</SyntaxHighlighter>
          <h3>componentMap</h3>
          <SyntaxHighlighter language='javascript' style={docco}>{componentMapCode}</SyntaxHighlighter>
          <h3>formFieldOptions</h3>
          <SyntaxHighlighter language='javascript' style={docco}>{formFieldOptionsCode}</SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

const HelloForm = Form.create()(Hello);


ReactDOM.render(<HelloForm />, document.getElementById('app'));


