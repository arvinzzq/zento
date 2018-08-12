import formElementMap from './formElementMap';

class FormCreator {
  constructor(options) {
    this.formFieldRender = options.formFieldRender;
  }

  /**
 * Recursive render form element to create full form element
 * @param {Array} configs form config used to create form
 * @param {Function} bindField bindField that is relatived to form-kit
 * @param {Array} activeIndexes actived indexes that are used to decide which subform should be displayed
 */
  create(configs, bindField, activeIndexes) {
    if (configs && !(configs instanceof Array)) {
      throw new Error('Configs must be array');
    }
    // why does this lost here ~ ?
    return configs.map((config, index) => formElementMap(
      this.create.bind(this),
      this.formFieldRender,
      bindField
    )[config.type](config, {
      index,
      activeIndexes,
      len: configs.length
    }));
  };
};

export default FormCreator;
