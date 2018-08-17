const reactCode = `
import { FormCreator, fieldComponentCreator } from 'zento';
import infoForm from './config/infoForm';
import componentMap from './config/componentMap';
import formFieldOptions from './config/formFieldOptions';

const fieldCreator = fieldComponentCreator(componentMap, formFieldOptions);
const formFieldRender = (bindField, config) => {
  const { label, name, fieldType, extra, rule } = config;
  return (
    <FormItem colon label={label}>
       {bindField(name, {
          rules: rule instanceof Array ? rule : [rule],
       })(fieldCreator(fieldType, name, extra))}
     </FormItem>
  );
};
const formCreator = new FormCreator({ formFieldRender });

<Form layout="inline">
  {formCreator.create(infoForm, getFieldDecorator, [activeIndex])}
</Form>
`;

const componentMapCode = `
import { Input, DatePicker } from 'antd';
import AddressCascader from '../components/AddressCascader';
import InfoRadio from '../components/InfoRadio';
import InfoSelect from '../components/InfoSelect';

const componentMap = {
  input: Input,
  datePicker: DatePicker,
  radio: InfoRadio,
  select: InfoSelect,
  address: AddressCascader
};

export default componentMap;
`;

export {
  reactCode,
  componentMapCode
};