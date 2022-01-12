import { useDate } from 'react-declarative';

import { action } from '@storybook/addon-actions';

import { Button } from '@mui/material';

import { PickerWrapper } from '../../../components/PickerWrapper';

const Picker = () => {
  const pickConfirm = useDate();
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

export const Date = View.bind({});

export default {
  title: 'One/Pickers',
};
