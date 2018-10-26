# Zento

#### zento -> bento

Zento is a configuration-based solution to form.

## TODO

* [x] generate form based on configuration
* [ ] support dynamic form whose content changes according to user interaction

## Background

Recently, I write the frontend part of a new staff entrant system, which mainly used for new staff to determine whether accept offer. and submit some information. The form used to submit staff information has many fields that is important to be determined, but,

* The product manager can't determine how many fields does they need, and number and type of field may change in future...

* The designer is too busy to provide a full version of the design...

* Back-end engineer think that there is no need to design a dynamic form, because it's very complicated from their point of view...

As the font-end developer of this project, emm...

<p align="center">
  <img width="400px" src="./godie.gif" />
</p>

I think that configuration-based form must be used in this project, otherwise, if the content of form changes frequently in future, it will waste more time to modify codes than configuration. Meanwhile, configuration-based form is much more easier to modify without worrying about logic error during modification.

```Zento``` is a configuration-based form generator. Default layout of form is grid-like which can be customized. ```Zento``` is also decoupled with component library, which is important in practice.

More feature -> TBD

## Usage

### Methods

| Method  |  Description |
|---|---|
| fieldComponentCreator  | create field component used for form component according to initial value and component type of each field |
|  FormCreator |  main class used to generate form according to configuration |

Node type of form configuration:

* subForm
* section
* formRow
* field

For more details, there is a demo -> https://www.zonzz.co/projects/zento

【TBD】
