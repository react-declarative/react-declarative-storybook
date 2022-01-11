import React from 'react';

import { action } from '@storybook/addon-actions';
import { Container, CssBaseline, Box } from '@mui/material';

import { OneTyped, TypedField } from 'react-declarative';

interface ILayoutTemplateProps {
    fields: TypedField[];
}

export const LayoutTemplate = ({
    fields,
}: ILayoutTemplateProps) => (
    <Container>
        <CssBaseline />
        <Box p={1}>
            <OneTyped
                fields={fields}
                focus={action('focus')}
                blur={action('blur')}
                change={action('change')}
                invalidity={action('invalidity')}
                ready={action('ready')}
                fallback={action('fallback')}
            />
        </Box>
    </Container>
);
