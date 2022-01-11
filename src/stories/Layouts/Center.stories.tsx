import { FieldType, TypedField } from 'react-declarative';

import { LayoutTemplate } from '../../components/LayoutTemplate';

export const Center = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Center,
    style: {
      height: '250px',
      background: 'whitesmoke',
    },
    fields: [
      {
        type: FieldType.Paper,
        columns: '3',
        child: {
          type: FieldType.Typography,
          placeholder: 'Content',
        },
      }
    ],
  }
];

Center.argTypes = {
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
