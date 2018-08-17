# Zento

#### zento -> bento【盒饭】

Zento is a configuration-based solution to form.

## TODO

* [x] 表单配置化生成
* [ ] 支持表单联动配置
* [ ] 支持更细粒度的表单元素的动态控制

## Background

做了一个新员工入职的系统，该系统主要的部分是员工信息的收集，会有一个要收集很多的字段的表单。恩~，但是在这个时候：

* 设计师说：没时间，给的设计稿是参考作用的粗糙版本...
* 产品说：需求方不能够确定要收集的字段以及字段的信息聚合的方式，并且之后可能会要增删改的...
* 后端说：不做动态的成本太高，咱们这次做成写死的吧...

作为负责前端的开发的我表示：

<p align="center">
  <img width="400px" src="./godie.gif" />
</p>

对这种不稳定需求，浪费生命在无限的改动上面是对时间的极大的不尊重...所以配置化的生成表单是一定要做了的...

zento是一个简单的基于配置的表单生成器，基础布局为grid的网格表单，支持自定义至每个field的样式，支持参数校验规则定义，等，TBD

zento目前的主要价值就是解决了这次的这个不稳定需求。

## Usage

主要提供两个方法：

* fieldComponentCreator // 根据配置生成对应的form的表单项的组件
* formCreator // 根据定义的field和表单配置生成带有布局的表单

此外，fieldNameRuleExtracter方法是用于根据表单配置以及fieldInitValudMap配置提取rules列表和name及对应的初始值的对象的数组（有些表单组件的抽象可能需要这两个数组，公司内部封装的就是这样~，我不喜欢，但是目前没时间写）；fieldSymbols定义了两种symbol类型 FIELD_CUSTOMIZED, FIELD_OPTIONS；traverser是一个遍历用的方法类，支持bfs和dfs，只是给fieldNameRuleExtracter用的。

目前支持

* subForm
* section
* formRow
* field

四个类型的表单元素的配置。

type, children是必须有的对于每个节点，其中对于type为field的元素，非嵌套form需要label, name, fieldType属性，其中extra中的props会作为参数给到表单field元素。其中四个类型的配置类型都支持style属性，设置后会在默认样式基础上进行合并设置。

需要提供表单配置基础配置、field和组件的map、对于自定义的field component，可以指定component class的static属性formFieldType为FIELD_CUSTOMIZED或者不定义，对于formFieldType定义为FIELD_OPTIONS的组件类型，fieldComponentCreator方法会根据配置的name属性从formFieldOptions中获取对于的options传递给component。对于复杂的表单项，可以增加isNest属性用嵌套表单的形式，在生成field的方法中自定义对应的处理就好了。

具体可以看 demo -> https://www.zonzz.co/projects/zento

【TBD】
