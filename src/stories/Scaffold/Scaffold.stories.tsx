import { IMenuGroup, Scaffold } from 'react-declarative';

import { action } from '@storybook/addon-actions';

import { Typography } from '@mui/material';

import { ComponentWrapper } from '../../components/ComponentWrapper';

const options: IMenuGroup[] = [
    {
        label: 'Use cases',
        options: [
            {
                name: "layout-page",
                label: 'Layout grid',
            },
            {
                name: "validation-page",
                label: 'Form validation',
            },
            {
                name: "gallery-page",
                label: 'Gallery of controls',
            },
            {
                name: "sample-page",
                label: 'Example page',
            },
            {
                name: "hero-page",
                label: 'Hero page',
            },
            {
                name: "list-page",
                label: 'List page',
            },
        ],
    },
];

const View = () => (
    <ComponentWrapper>
        <Scaffold
            title="Scaffold"
            options={options}
            onOptionClick={action('option-click')}
        >
            <Typography>
                Content
            </Typography>
        </Scaffold>
    </ComponentWrapper>
);

export const ScaffoldView = View.bind({});

ScaffoldView.argTypes = {
    options: {
        name: 'options',
        defaultValue: options,
        readonly: true,
        control: {
            type: 'object',
        },
    },
};

export default {
    title: 'Scaffold/View',
};
