import { FieldType, TypedField } from 'react-declarative';

import { LayoutTemplate } from '../../components/LayoutTemplate';

export const Outline = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Outline,
    fields: [
      {
        type: FieldType.Typography,
        placeholder: 'Content',
      },
    ],
  }
];

Outline.argTypes = {
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
