import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../../components/FieldTemplate';

export const Checkbox = FieldTemplate.bind({});

const checkbox: TypedField = {
  type: FieldType.Checkbox,
  title: 'Checkbox',
  name: 'checkbox',
};

Checkbox.argTypes = {
  field: {
    name: 'field',
    defaultValue: checkbox,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
