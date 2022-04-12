import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../../components/FieldTemplate';

export const Textfield = FieldTemplate.bind({});

const textfield: TypedField = {
  type: FieldType.Text,
  title: 'Phone number',
  name: 'phone',
  inputFormatterTemplate: '+1 (000) 000-0000',
};

Textfield.argTypes = {
  field: {
    name: 'field',
    defaultValue: textfield,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
