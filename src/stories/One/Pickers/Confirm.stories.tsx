import { useConfirm } from 'react-declarative';

import { action } from '@storybook/addon-actions';

import { Button } from '@mui/material';

import { PickerWrapper } from '../../../components/PickerWrapper';

const Picker = () => {
  const pickConfirm = useConfirm({
    title: 'Example Confirm',
    msg: 'Some text',
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

export const Confirm = View.bind({});

export default {
  title: 'One/Pickers',
};
