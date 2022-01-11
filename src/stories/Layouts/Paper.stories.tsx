import { FieldType, TypedField } from 'react-declarative';

import { LayoutTemplate } from '../../components/LayoutTemplate';

export const Paper = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Paper,
    fields: [
      {
        type: FieldType.Typography,
        placeholder: 'Content',
      },
    ],
  }
];

Paper.argTypes = {
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
