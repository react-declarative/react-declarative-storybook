import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../components/FieldTemplate';

export const Typography = FieldTemplate.bind({});

const typography: TypedField = {
  type: FieldType.Typography,
  placeholder: 'Typography',
  name: 'typography',
};

Typography.argTypes = {
  field: {
    name: 'field',
    defaultValue: typography,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
