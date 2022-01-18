import { FieldType, TypedField } from 'react-declarative';

import { Face } from '@mui/icons-material';

import { LayoutTemplate } from '../../../components/LayoutTemplate';

import { sleep } from '../../../utils/sleep';

export const Form3 = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Line,
    title: 'User info',
  },
  {
    type: FieldType.Group,
    phoneColumns: '12',
    tabletColumns: '6',
    desktopColumns: '4',
    fieldRightMargin: '0',
    fields: [
      {
        type: FieldType.Text,
        title: 'First name',
        defaultValue: 'Petr',
        description: 'Your first name',
        leadingIcon: Face,
        focus() { console.log("focus :-)"); },
        blur() { console.log("blur :-("); },
        name: 'firstName',
      },
      {
        type: FieldType.Text,
        title: 'Last name',
        defaultValue: 'Tripolsky',
        description: 'Your last name',
        name: 'lastName',
      },
      {
        type: FieldType.Text,
        title: 'Email',
        defaultValue: 'tripolskypetr@gmail.com',
        description: 'Gmail. Yahoo, Yandex...',
        name: 'email',
      }
    ],
  },
  {
    type: FieldType.Group,
    phoneColumns: '12',
    tabletColumns: '6',
    desktopColumns: '4',
    fieldRightMargin: '0',
    fields: [
      {
        type: FieldType.Combo,
        name: 'gender',
        title: 'Gender',
        description: 'Your gender',
        async itemList() {
          await sleep(1e3);
          return [
            'male-unique-key',
            'female-unique-key',
            'other-unique-key',
          ];
        },
        async tr(current) {
          await sleep(5e2);
          if (current === 'male-unique-key') {
            return 'Male';
          } else if (current === 'female-unique-key') {
            return 'Female';
          } else if (current === 'other-unique-key') {
            return 'Other';
          } else {
            return "";
          }
        },
        defaultValue: 'male-unique-key',
      },
      {
        type: FieldType.Items,
        name: 'lists',
        title: 'User lists',
        description: 'Multiple input',
        async itemList() {
          await sleep(1e3);
          return [
            'vip-value',
            'allow-value',
            'other-value',
          ];
        },
        async tr(current) {
          await sleep(5e2);
          if (current === 'vip-value') {
            return 'Vip';
          } else if (current === 'allow-value') {
            return 'Allow';
          } else if (current === 'other-value') {
            return 'Other';
          } else {
            return "";
          }
        },
        defaultValue: ['vip-value', 'allow-value'],
      },
      {
        type: FieldType.Text,
        inputType: 'number',
        title: 'Age',
        defaultValue: '21',
        description: '25',
        name: 'How old are you?',
      },
    ],
  },
  {
    type: FieldType.Group,
    phoneColumns: '12',
    tabletColumns: '6',
    desktopColumns: '4',
    fieldRightMargin: '0',
    fields: [
      {
        type: FieldType.Text,
        name: 'phone',
        title: 'Phone',
        description: 'Your phone',
        inputType: 'tel',
        defaultValue: '8999',
      },
      {
        type: FieldType.Text,
        name: 'fax',
        title: 'Fax',
        description: 'Your fax',
        inputType: 'tel',
        defaultValue: '8999',
      },
    ],
  },
  {
    type: FieldType.Text,
    name: 'comment',
    title: 'Any comment',
    inputRows: 4,
  },
  {
    type: FieldType.Component,
    element: (props) => <small>{props.comment}</small>
  }
];

Form3.argTypes = {
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
  title: 'One/Recipes',
};
