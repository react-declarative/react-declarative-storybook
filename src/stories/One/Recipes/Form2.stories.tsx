import { FieldType, TypedField, AutoSizer } from 'react-declarative';

import { Box, Avatar } from '@mui/material';
import { css } from '@emotion/css';

import { LayoutTemplate } from '../../../components/LayoutTemplate';

export const Form2 = LayoutTemplate.bind({});

const fields: TypedField[] = [
  {
    type: FieldType.Group,
    fieldBottomMargin: '0',
    fields: [
      {
        type: FieldType.Group,
        columns: "2",
        fields: [
          {
            type: FieldType.Component,
            element: () => (
              <AutoSizer style={{ height: 225 }}>
                {({ width }) => (
                  <Box className={css`display: flex; align-items: center; overflow: hidden; margin-right: 5px; margin-left: -5px;`}>
                    <Avatar className={css`margin-top: 30px; border-radius: unset !important;`} style={{ height: width, width }} />
                  </Box>
                )}
              </AutoSizer>
            ),
          },
          {
            type: FieldType.Rating,
            fieldBottomMargin: '0',
            name: 'rating',
            defaultValue: 3,
          }
        ]
      },
      {
        type: FieldType.Group,
        fieldBottomMargin: '0',
        columns: "10",
        fields: [
          {
            type: FieldType.Line,
            title: 'Profile'
          },
          {
            type: FieldType.Combo,
            title: 'Gender',
            placeholder: 'Choose',
            name: 'gender',
            itemList: ['Male', 'Female', 'Other']
          },
          {
            type: FieldType.Items,
            title: 'Lists',
            placeholder: 'Pick a few user lists',
            name: 'list',
            itemList: ['Blocklist', 'VIP', 'Other people']
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: '0',
            fields: [
              {
                type: FieldType.Group,
                fieldBottomMargin: '0',
                columns: "9",
                fields: [
                  {
                    type: FieldType.Text,
                    outlined: false,
                    title: 'Enable',
                    name: 'keyword',
                    placeholder: 'September',
                    isDisabled: (obj) => !obj.keywordEnabled,
                  },
                ]
              },
              {
                type: FieldType.Group,
                fieldBottomMargin: '0',
                columns: "3",
                fields: [
                  {
                    type: FieldType.Checkbox,
                    title: 'Code word',
                    name: 'keywordEnabled',
                  },
                ]
              },
            ]
          }
        ]
      }
    ]
  },
  {
    type: FieldType.Line,
    title: 'Common info',
  },
  {
    name: 'firstName',
    type: FieldType.Text,
    title: 'First name',
    description: 'Felton',
  },
  {
    name: 'lastName',
    type: FieldType.Text,
    title: 'Last name',
    description: 'Cruickshank',
  },
  {
    name: 'age',
    type: FieldType.Text,
    title: 'Age',
    description: '42',
  },
  {
    type: FieldType.Expansion,
    title: 'Subscription',
    description: 'Unsubscribe from newsletters',
    fields: [
      {
        type: FieldType.Switch,
        name: 'subscribed',
        title: 'Enable',
      },
    ],
  },
  {
    type: FieldType.Group,
    fields: [
      {
        type: FieldType.Group,
        columns: '6',
        fields: [
          {
            type: FieldType.Line,
            title: 'Job',
          },
          {
            name: 'jobTitle',
            type: FieldType.Text,
            title: 'Title',
          },
          {
            name: 'jobArea',
            type: FieldType.Text,
            title: 'Area',
          },
        ]
      },
      {
        type: FieldType.Group,
        columns: '6',
        fields: [
          {
            type: FieldType.Line,
            title: 'Home',
          },
          {
            name: 'country',
            type: FieldType.Text,
            title: 'County',
          },
          {
            name: 'city',
            type: FieldType.Text,
            title: 'City',
          },
          {
            name: 'state',
            type: FieldType.Text,
            title: 'State',
          },
          {
            name: 'address',
            type: FieldType.Text,
            title: 'Address',
          },
        ]
      },
    ],
  },
];

Form2.argTypes = {
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
