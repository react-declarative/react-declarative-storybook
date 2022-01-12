import { FieldType, TypedField } from 'react-declarative';

import { AvatarPicker } from '../../../components/common/AvatarPicker';
import { RemoveAccount } from '../../../components/common/RemoveAccount';

import { LayoutTemplate } from '../../../components/LayoutTemplate';

export const Form1 = LayoutTemplate.bind({});

const personalFields: TypedField[] = [
  {
      type: FieldType.Line,
      title: 'Personal info',
  },
  {
      type: FieldType.Component,
      fieldBottomMargin: '0',
      element: () => <AvatarPicker />
  },
  {
      type: FieldType.Text,
      fieldRightMargin: '0',
      name: 'global.login',
      title: 'Nickname',
      description: 'A nickname linked to this account',
  },
  {
      type: FieldType.Text,
      fieldRightMargin: '0',
      name: 'global.email',
      readonly: true,
      title: 'Email (Readonly)',
      description: 'An email address linked to this account',
  },
];

const norifyFields: TypedField[] = [
  {
      type: FieldType.Line,
      title: 'Notifications',
  },
  {
      type: FieldType.Expansion,
      fieldRightMargin: '0',
      title: 'Moderations',
      fields: [
          {
              type: FieldType.Switch,
              name: 'notify.moderation',
              fieldRightMargin: '0',
              title: 'Moderations',
              fieldBottomMargin: '0',
          },
          {
              type: FieldType.Typography,
              typoVariant: 'subtitle2',
              placeholder: 'Toggle moderation notifications',
              style: {
                  opacity: 0.5,
              },
              fieldBottomMargin: '0',
          },
      ],
  },
  {
      type: FieldType.Expansion,
      fieldRightMargin: '0',
      title: 'Payments',
      fields: [
          {
              type: FieldType.Switch,
              name: 'notify.payment',
              fieldRightMargin: '0',
              title: 'Payments',
              fieldBottomMargin: '0',
          },
          {
              type: FieldType.Typography,
              typoVariant: 'subtitle2',
              fieldRightMargin: '0',
              placeholder: 'Toggle payments notifications',
              style: {
                  opacity: 0.5,
              },
              fieldBottomMargin: '0',
          },
      ],
  },
  {
      type: FieldType.Expansion,
      fieldRightMargin: '0',
      title: 'Withdraws',
      fields: [
          {
              type: FieldType.Switch,
              name: 'notify.withdraw',
              fieldRightMargin: '0',
              title: 'Withdraws',
              fieldBottomMargin: '0',
          },
          {
              type: FieldType.Typography,
              typoVariant: 'subtitle2',
              fieldRightMargin: '0',
              placeholder: 'Toggle withdraw notifications',
              style: {
                  opacity: 0.5,
              },
              fieldBottomMargin: '0',
          },
      ],
  },
];

const dangerFields: TypedField[] = [
  {
      type: FieldType.Line,
      title: 'Danger',
  },
  {
      type: FieldType.Component,
      element: () => <RemoveAccount />,
  },
];

const fields: TypedField[] = [
  ...personalFields,
  ...norifyFields,
  ...dangerFields,
];

Form1.argTypes = {
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
