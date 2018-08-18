const hasSymbol = typeof Symbol === 'function' && Symbol.for;

const fieldSymbols = {
  FIELD_CUSTOMIZED: hasSymbol ? Symbol.for('field.customized') : 'field.customized',
  FIELD_OPTIONS: hasSymbol ? Symbol.for('field.options') : 'field.options'
};

export default fieldSymbols;
