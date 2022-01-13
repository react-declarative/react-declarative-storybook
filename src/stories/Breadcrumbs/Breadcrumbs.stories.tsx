import { Breadcrumbs, IOption, One, IField, FieldType } from 'react-declarative';

import { action } from '@storybook/addon-actions';

import { ComponentWrapper } from '../../components/ComponentWrapper';

const actions: IOption[] = [
    {
        label: 'Sample action',
        action: 'sample-action',
    }
];

const fields: IField[] = [
    {
        type: FieldType.Line,
        title: 'Content',
    },
    {
        type: FieldType.Text,
        name: 'text',
        defaultValue: 'Default value',
        title: 'Title',
        description: 'Description',
    },
];

const View = () => (
    <ComponentWrapper>
        <Breadcrumbs
            onSave={action('save')}
            onAction={action('action')}
            actions={actions}
        />
        <One fields={fields} />
    </ComponentWrapper>
);

export const BreadcrumbsView = View.bind({});

BreadcrumbsView.argTypes = {
    actions: {
        name: 'actions',
        defaultValue: actions,
        readonly: true,
        control: {
            type: 'object',
        },
    },
    fields: {
        name: 'fields',
        defaultValue: fields,
        readonly: true,
        control: {
            type: 'object',
        },
    },
};


export default {
    title: 'Breadcrumbs/View',
};
