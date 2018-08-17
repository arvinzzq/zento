export default [
  {
    type: 'subForm',
    title: '个人信息',
    description: '注：声明\n本人确认所填写内容均真实、准确，如存在任何不实或误导信息，一经发现，愿意接受解除劳动关系处分。',
    children: [{
      type: 'section',
      title: '基础信息',
      children: [
        {
          type: 'formRow',
          key: 'basic-info-1',
          children: [{
            type: 'field',
            label: '姓名',
            name: 'realname',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'string',
              message: '请填写姓名'
            },
            extra: {
              props: {
                placeholder: '请输入姓名',
                style: { width: 150 }
              }
            }
          }, {
            type: 'field',
            label: '花名',
            name: 'nickname',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'string',
              message: '请填写花名'
            },
            extra: {
              props: {
                placeholder: '请输入花名',
                style: { width: 150 }
              }
            }
          }, {
            type: 'field',
            label: '身份证号',
            name: 'idCard',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'string',
              message: '请填写身份证号'
            },
            extra: {
              props: {
                placeholder: '请输入身份证号',
                style: { width: 150 }
              }
            }
          }, {
            type: 'field',
            label: '生日',
            name: 'birthday',
            fieldType: 'datePicker',
            rule: {
              required: true,
              type: 'string',
              message: '请填写生日'
            },
            extra: {
              props: {
                placeholder: '请选择生日',
                style: { width: 150 }
              }
            }
          }]
        },
        {
          type: 'formRow',
          key: 'basic-info-2',
          children: [{
            type: 'field',
            label: '性别',
            name: 'sex',
            fieldType: 'radio',
            rule: {
              required: true,
              type: 'number',
              message: '请选择性别'
            },
            extra: {
              props: {
                style: { width: 150 }
              }
            }
          }, {
            type: 'field',
            label: '星座',
            name: 'constellation',
            fieldType: 'select',
            rule: {
              required: true,
              type: 'string',
              message: '请填写星座'
            },
            extra: {
              props: {
                placeholder: '请选择星座',
                style: { width: 150 }
              }
            }
          }, {
            type: 'field',
            label: '政治面貌',
            name: 'politicalStatus',
            placeholder: '请选择政治面貌',
            fieldType: 'select',
            rule: {
              required: true,
              type: 'string',
              message: '请填写政治面貌'
            },
            extra: {
              props: {
                placeholder: '请选择政治面貌',
                style: { width: 150 }
              }
            }
          }, {
            type: 'field',
            label: '学历',
            name: 'education',
            fieldType: 'select',
            rule: {
              required: true,
              type: 'string',
              message: '请填写学历'
            },
            extra: {
              props: {
                placeholder: '请你的学历',
                style: { width: 150 }
              }
            }
          }]
        },
        {
          type: 'formRow',
          key: 'basic-info-3',
          children: [{
            type: 'field',
            label: '首次工作日期',
            name: 'firstJobDate',
            fieldType: 'datePicker',
            rule: {
              required: true,
              type: 'string',
              message: '请填写首次工作日期'
            },
            extra: {
              props: {
                placeholder: '请选择首次工作的日期',
                style: { width: 350 }
              }
            }
          }, {
            type: 'field',
            label: '招行银行卡号',
            name: 'bankCard',
            placeholder: '请输入招行银行卡号',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'number',
              message: '请填写招行银行卡号'
            },
            extra: {
              props: {
                placeholder: '请输入招行银行卡号',
                style: { width: 350 }
              }
            }
          }]
        }
      ]
    }, {
      type: 'section',
      title: '地址信息',
      children: [
        {
          type: 'formRow',
          key: 'address-info-1',
          children: [{
            type: 'field',
            label: '居住所在地区',
            name: 'currentAddress',
            fieldType: 'address',
            rule: [
              {validator(rule, value, callback) {
                if (value instanceof Array && value.length > 0) {
                  callback();
                } else {
                  callback('请选择居住地');
                }
              }}
            ],
            extra: {
              props: {
                className: 'address-cascader-current',
                placeholder: '请选择省、市、区',
                style: { width: 350 }
              }
            }
          }, {
            type: 'field',
            label: '居住详细地址',
            name: 'addressDetail',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'string',
              message: '请填写居住详细地址'
            },
            extra: {
              props: {
                placeholder: '请输入居住详细地址',
                style: { width: 350 }
              }
            }
          }]
        },
        {
          type: 'formRow',
          key: 'address-info-2',
          children: [{
            type: 'field',
            label: '户口所在地区',
            name: 'hukouAddress', // 中国特色的东西 -> 户口 ~ 就用拼音吧
            fieldType: 'address',
            rule: [
              {validator(rule, value, callback) {
                if (value instanceof Array && value.length > 0) {
                  callback();
                } else {
                  callback('请选择户口所在地');
                }
              }}
            ],
            extra: {
              props: {
                className: 'address-cascader-hukou',
                placeholder: '请选择省、市、区',
                style: { width: 350 }
              }
            }
          }, {
            type: 'field',
            label: '户口详细地址',
            name: 'homeAddressDetail',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'string',
              message: '请填写户口详细地址'
            },
            extra: {
              props: {
                placeholder: '请输入户口详细地址',
                style: { width: 350 }
              }
            }
          }]
        },
        {
          type: 'formRow',
          key: 'address-info-3',
          children: [{
            type: 'field',
            label: '户口类型',
            name: 'hukouType',
            fieldType: 'radio',
            rule: {
              required: true,
              type: 'string',
              message: '请填写户口类型'
            },
            extra: {
              props: {
                style: { width: 150 }
              }
            }
          }, {
            type: 'field',
            label: '婚姻状况',
            name: 'maritalStatus',
            fieldType: 'radio',
            rule: {
              required: true,
              type: 'string',
              message: '请填写婚姻状况'
            },
            extra: {
              props: {
                style: { width: 150 }
              }
            }
          }, {
            type: 'field',
            label: '生育状况',
            name: 'shengyuStatus',
            fieldType: 'radio',
            rule: {
              required: true,
              type: 'string',
              message: '请填写生育状况'
            },
            extra: {
              props: {
                style: { width: 150 }
              }
            }
          }]
        }
      ]
    }, {
      type: 'section',
      title: '紧急联系人',
      children: [
        {
          type: 'formRow',
          key: 'emergency-contact-1',
          children: [{
            type: 'field',
            label: '紧急联系人',
            name: 'emergencyName',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'string',
              message: '请填写紧急联系人'
            },
            extra: {
              props: {
                placeholder: '请输入紧急联系人姓名',
                style: { width: 200 }
              }
            }
          }, {
            type: 'field',
            label: '紧急联系人电话',
            name: 'emergencyPhone',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'number',
              message: '请填写紧急联系人电话'
            },
            extra: {
              props: {
                placeholder: '请输入联系人电话',
                style: { width: 200 }
              }
            }
          }, {
            type: 'field',
            label: '紧急联系人关系',
            name: 'emergencyRelationship',
            placeholder: '请输入联系人关系',
            fieldType: 'input',
            rule: {
              required: true,
              type: 'string',
              message: '请填写紧急联系人关系'
            },
            extra: {
              props: {
                placeholder: '请输入联系人关系',
                style: { width: 200 }
              }
            }
          }]
        }
      ]
    }]
  }, {
    type: 'subForm',
    title: '家庭成员',
    description: '工作经历说明',
    children: []
  }, {
    type: 'subForm',
    title: '教育背景',
    description: '工作经历说明',
    children: []
  }, {
    type: 'subForm',
    title: '工作经历',
    description: '工作经历说明',
    children: []
  }, {
    type: 'subForm',
    title: '资格证书',
    description: '资格证书说明',
    children: []
  }, {
    type: 'subForm',
    title: '情况说明',
    description: '情况说明的说明',
    children: []
  }
];
