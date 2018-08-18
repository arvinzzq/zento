import React from 'react';
import fieldSymbols from './fieldSymbols';

const { FIELD_CUSTOMIZED, FIELD_OPTIONS } = fieldSymbols;

const fieldComponentCreator = (componentMap, formFieldOptions) => (type, name, extra = {}) => {
  const Component = componentMap[type];
  const { props } = extra;
  if (!Component) {
    throw new Error('Unknown type of component');
  }
  let Field;
  switch (Component.formFieldType) {
    case FIELD_OPTIONS:
      if (!formFieldOptions[name]) {
        throw new Error('No field option is found');
      }
      Field = <Component {...props} name={name} options={formFieldOptions[name]} />;
      break;
    case FIELD_CUSTOMIZED:
    default:
      Field = <Component {...props} name={name} />;
      break;
      // do nothing
  }
  return Field;
};

export default fieldComponentCreator;
