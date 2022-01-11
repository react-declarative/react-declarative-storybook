import { FieldType, TypedField } from 'react-declarative';

import { LayoutTemplate } from '../../components/LayoutTemplate';

export const Expansion = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Expansion,
    title: 'Title',
    description: 'Description',
    child: {
      type: FieldType.Typography,
      placeholder: 'Content',
    },
  }
];

Expansion.argTypes = {
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
