import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../components/FieldTemplate';

export const Radio = FieldTemplate.bind({});

const radio: TypedField = {
  type: FieldType.Radio,
  title: 'Radio',
  name: 'radio',
  radioValue: 'first-radio',
};

Radio.argTypes = {
  field: {
    name: 'field',
    defaultValue: radio,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
