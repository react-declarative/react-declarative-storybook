import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../components/FieldTemplate';

export const Switch = FieldTemplate.bind({});

const switchField: TypedField = {
  type: FieldType.Switch,
  title: 'Switch',
  name: 'switchField',
};

Switch.argTypes = {
  field: {
    name: 'field',
    defaultValue: switchField,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
