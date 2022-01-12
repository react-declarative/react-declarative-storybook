import { FieldType, TypedField } from 'react-declarative';

import { LayoutTemplate } from '../../../components/LayoutTemplate';

export const Stretch = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Stretch,
    style: {
      height: '250px',
      background: 'cyan',
    },
    fields: [
      {
        type: FieldType.Div,
        style: {
          background: 'magenta',
          margin: '25px',
        },
        child: {
          type: FieldType.Typography,
          placeholder: 'Content',
        },
      }
    ],
  }
];

Stretch.argTypes = {
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
