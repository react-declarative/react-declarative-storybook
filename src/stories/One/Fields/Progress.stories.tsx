import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../../components/FieldTemplate';

export const Progress = FieldTemplate.bind({});

const progress: TypedField = {
  type: FieldType.Progress,
  name: 'progress',
};

Progress.argTypes = {
  field: {
    name: 'field',
    defaultValue: progress,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
