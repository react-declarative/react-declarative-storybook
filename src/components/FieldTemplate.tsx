import React from 'react';

import { action } from '@storybook/addon-actions';
import { Container, CssBaseline, Box } from '@mui/material';

import { OneTyped, TypedField, ModalProvider } from 'react-declarative';

interface IFieldTemplateProps {
  field: TypedField;
}

export const FieldTemplate = ({
  field,
}: IFieldTemplateProps) => (
  <ModalProvider>
    <Container>
      <CssBaseline />
      <Box p={1}>
        <OneTyped
          fields={[field]}
          focus={action('focus')}
          blur={action('blur')}
          change={action('change')}
          invalidity={action('invalidity')}
          ready={action('ready')}
          fallback={action('fallback')}
        />
      </Box>
    </Container>
  </ModalProvider>
);
