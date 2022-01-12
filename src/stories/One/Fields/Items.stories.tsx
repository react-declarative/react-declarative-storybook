import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../../components/FieldTemplate';

export const Items = FieldTemplate.bind({});

const items: TypedField = {
  type: FieldType.Items,
  title: 'Items',
  name: 'items',
};

Items.argTypes = {
  field: {
    name: 'field',
    defaultValue: items,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
