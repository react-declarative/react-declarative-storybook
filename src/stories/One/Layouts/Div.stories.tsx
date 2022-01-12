import { FieldType, TypedField } from 'react-declarative';

import { css } from '@emotion/css'

import { LayoutTemplate } from '../../../components/LayoutTemplate';

export const Div = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Div,
    className: css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: white;
      }
    `,
    child: {
      type: FieldType.Typography,
      placeholder: 'Content',
    },
  }
];

Div.argTypes = {
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
