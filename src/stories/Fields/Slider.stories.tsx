import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../components/FieldTemplate';

export const Slider = FieldTemplate.bind({});

const slider: TypedField = {
  type: FieldType.Slider,
  name: 'slider',
};

Slider.argTypes = {
  field: {
    name: 'field',
    defaultValue: slider,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
