const hasSymbol = typeof Symbol === 'function' && Symbol.for;

const FIELD_CUSTOMIZED = hasSymbol ? Symbol.for('field.customized') : 'field.customized';
const FIELD_OPTIONS = hasSymbol ? Symbol.for('field.options') : 'field.options';

export {
  FIELD_CUSTOMIZED,
  FIELD_OPTIONS
};
