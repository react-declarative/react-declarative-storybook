import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../../components/FieldTemplate';

export const Combo = FieldTemplate.bind({});

const combo: TypedField = {
  type: FieldType.Combo,
  title: 'Combo',
  name: 'combo',
};

Combo.argTypes = {
  field: {
    name: 'field',
    defaultValue: combo,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
