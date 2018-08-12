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
