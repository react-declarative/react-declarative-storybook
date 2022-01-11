import { FieldType, TypedField } from 'react-declarative';

import { LayoutTemplate } from '../../components/LayoutTemplate';

export const Group = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Group,
    columns: '6',
    child: {
      type: FieldType.Typography,
      placeholder: 'Content 1',
    },
  },
  {
    type: FieldType.Group,
    columns: '6',
    child: {
      type: FieldType.Typography,
      placeholder: 'Content 2',
    },
  }
];

Group.argTypes = {
  fields: {
    name: 'fields',
    defaultValue: fields,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Layouts',
};
