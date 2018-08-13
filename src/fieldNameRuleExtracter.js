import Traverser from './traverser';

const traverser = new Traverser();

const fieldNameRuleExtracter = fieldInitValueMap => infoFormConfig => {
  const fieldNames = {};
  const fieldRules = {};
  traverser.dfs(infoFormConfig).filter(item => item.type === 'field').forEach(field => {
    fieldNames[field.name] = fieldInitValueMap[field.fieldType] || '';
    fieldRules[field.name] = field.rule;
  });
  return {
    fieldNames,
    fieldRules
  };
};

export default fieldNameRuleExtracter;