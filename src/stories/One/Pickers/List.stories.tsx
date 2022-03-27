import { ColumnType, IColumn, useList } from 'react-declarative';

import { action } from '@storybook/addon-actions';

import { Button } from '@mui/material';

import { PickerWrapper } from '../../../components/PickerWrapper';

import mock from '../../../mock/list.json';

const columns: IColumn[] = [
  {
    type: ColumnType.Text,
    field: 'id',
    headerName: 'ID',
    secondary: true,
    width: 'max(calc(100vw - 665px), 200px)',
  },
  {
    type: ColumnType.Compute,
    headerName: 'Full name',
    primary: true,
    compute: ({ firstName, lastName }) => `${firstName} ${lastName}`,
    width: '200px',
  },
];

const Picker = () => {
  const pickConfirm = useList({
    title: 'Pick item',
    handler: mock,
    columns,
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

export const List = View.bind({});

export default {
  title: 'One/Pickers',
};
