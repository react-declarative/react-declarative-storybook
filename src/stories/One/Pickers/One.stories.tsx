import { FieldType, IField, useOne } from 'react-declarative';

import { action } from '@storybook/addon-actions';

import { Button } from '@mui/material';

import { PickerWrapper } from '../../../components/PickerWrapper';

import { rnd } from '../../../utils/rnd';

const fields: IField[] = [
  {
    type: FieldType.Hero,
    minWidth: '360px',
    minHeight: ({ reason }) => reason === 'moderation-request' ? '250px' : '140px',
    child: {
      type: FieldType.Group,
      fields: [
        {
          type: FieldType.Text,
          name: 'dropperUserId',
          fieldBottomMargin: '1',
          fieldRightMargin: '0',
          title: 'Dropper',
          outlined: false,
          readonly: true,
          disabled: true,
        },
        {
          type: FieldType.Radio,
          name: 'reason',
          fieldBottomMargin: '0',
          fieldRightMargin: '0',
          title: 'I lost the competition',
          radioValue: 'competition-lose',
          defaultValue: 'competition-lose',
        },
        {
          type: FieldType.Radio,
          name: 'reason',
          fieldBottomMargin: '1',
          fieldRightMargin: '0',
          title: 'Moderation required',
          radioValue: 'moderation-request',
        },
        {
          type: FieldType.Text,
          name: 'comment',
          title: 'Comment',
          placeholder: 'A few words about competition',
          autoFocus: true,
          fieldBottomMargin: '0',
          fieldRightMargin: '0',
          isVisible: ({ reason }) => reason === 'moderation-request',
          inputRows: 3,
          outlined: true,
        }
      ]
    }
  },
];

const Picker = () => {
  const pickConfirm = useOne({
    title: 'Finish competition',
    handler: {
      dropperUserId: rnd(),
    },
    fields,
  });
  const handleClick = () => pickConfirm().then(action('picker'));
  return (
    <Button onClick={handleClick}>
      Click me
    </Button>
  );
};

const View = () => (
  <PickerWrapper>
    <Picker />
  </PickerWrapper>
);

export const One = View.bind({});

export default {
  title: 'One/Pickers',
};
