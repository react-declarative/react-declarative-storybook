import { FieldType, TypedField } from 'react-declarative';

import { LayoutTemplate } from '../../../components/LayoutTemplate';

export const Tabs = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Paper,
    innerPadding: "0",
    child: {
      type: FieldType.Tabs,
      tabList: [
        "First",
        "Second",
        "Third"
      ],
      tabLine: true,
      tabBackground: true,
      fields: [
        {
          type: FieldType.Group,
          fields: [
            {
              type: FieldType.Typography,
              typoVariant: 'body1',
              placeholder: 'First Tab',
            },
          ],
        },
        {
          type: FieldType.Typography,
          typoVariant: 'body1',
          placeholder: 'Second Tab',
        },
        {
          type: FieldType.Typography,
          typoVariant: 'body1',
          placeholder: 'Third Tab',
        },
      ],
    },
  },
];

Tabs.argTypes = {
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
