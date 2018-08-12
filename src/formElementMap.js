import React from 'react';

const formElementMap = (renderSubForm, renderFormField, bindField) => ({
  subForm: (config, options) => {
    const { index, activeIndexes } = options;
    const { children, description, style, className } = config;
    return (
      <div
        className={className}
        key={index}
        style={{
          boxSizing: 'border-box',
          paddingTop: 35,
          display: activeIndexes.indexOf(index) === -1 ? 'none' : 'block',
          ...style
        }}
      >
        <pre style={{ fontSize: 12, lineHeight: '18px', color: '#666' }}>{description}</pre>
        <div style={{ boxSizing: 'border-box' }}>
          {renderSubForm(children, bindField)}
        </div>
      </div>
    );
  },
  section: (config, options) => {
    const { index } = options;
    const { children, title, style, className } = config;
    return (
      <div
        className={className}
        key={index}
        style={{
          boxSizing: 'border-box',
          marginTop: 30,
          ...style
        }}
      >
        <div
          style={{
            display: title ? 'block' : 'none',
            fontSize: 16,
            color: '#333',
            fontWeight: 'bold',
            paddingLeft: 10,
            borderLeft: '3px solid #38f',
            marginBottom: 20
          }}
        >{title}</div>
        {renderSubForm(children, bindField)}
      </div>
    );
  },
  formRow: config => {
    const { children, key, style, className } = config;
    return (
      <div
        className={className}
        key={key}
        style={{
          boxSizing: 'border-box',
          ...style
        }}
      >
        {renderSubForm(children, bindField)}
      </div>
    );
  },
  field: (config, options) => {
    const { len } = options;
    const { name, style } = config;
    return (
      <div
        key={name}
        style={{
          boxSizing: 'border-box',
          height: 60,
          width: `${100 / len}%`,
          display: 'inline-block',
          ...style
        }}
      >
        {renderFormField(bindField, config)}
      </div>
    );
  }
});

export default formElementMap;
