import { FieldType, TypedField } from 'react-declarative';

import { LayoutTemplate } from '../../../components/LayoutTemplate';

export const Fragment = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Checkbox,
    title: 'Mark as visible',
    name: 'visible',
    defaultValue: true,
  },
  {
    type: FieldType.Fragment,
    isVisible({ visible }) {
      return visible;
    },
    fields: [
      {
        type: FieldType.Typography,
        placeholder: 'Content'
      },
    ],
  },
];

Fragment.argTypes = {
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
