import { FieldType, TypedField } from 'react-declarative';

import { FieldTemplate } from '../../components/FieldTemplate';

export const Rating = FieldTemplate.bind({});

const rating: TypedField = {
  type: FieldType.Rating,
  name: 'rating',
};

Rating.argTypes = {
  field: {
    name: 'field',
    defaultValue: rating,
    readonly: true,
    control: {
      type: 'object',
    },
  }
};

export default {
  title: 'One/Fields',
};
