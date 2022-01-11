import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../components/FieldTemplate';

export const Line = FieldTemplate.bind({});

const line: TypedField = {
  type: FieldType.Line,
  title: 'Line',
  name: 'line',
};

Line.argTypes = {
  field: {
    name: 'field',
    defaultValue: line,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
