import { List, FieldType, ColumnType, ActionType, SelectionMode, TypedField, IColumn, IListAction, ListHandlerPagination, ListHandlerSortModel } from 'react-declarative';

import { Delete } from '@mui/icons-material';
import { Add } from '@mui/icons-material';

import { ComponentWrapper } from '../../components/ComponentWrapper';

import mock from '../../mock/list.json';

const filters: TypedField[] = [
    {
        type: FieldType.Text,
        name: 'firstName',
        title: 'First name',
    },
    {
        type: FieldType.Text,
        name: 'lastName',
        title: 'Last name',
    }
];

const columns: IColumn[] = [
    {
        type: ColumnType.Text,
        field: 'id',
        headerName: 'ID',
        secondary: true,
        width: (fullWidth) => Math.max(fullWidth - 665, 200),
    },
    {
        type: ColumnType.Compute,
        headerName: 'Full name',
        primary: true,
        compute: ({ firstName, lastName }) => `${firstName} ${lastName}`,
        width: () => 200,
    },
    {
        type: ColumnType.Component,
        headerName: 'Component',
        element: () => (
            <div>
                Custom cell Component
            </div>
        ),
        width: () => 200,
    },
    {
        type: ColumnType.Action,
        headerName: 'Actions',
        sortable: false,
        width: () => 150,
    },
];

const actions: IListAction[] = [
    {
        type: ActionType.Add,
    },
    {
        type: ActionType.Menu,
        options: [
            {
                action: 'add-action',
                label: 'Create new row',
                icon: Add,
            },
            {
                action: 'update-now',
            },
            {
                action: 'resort-action',
            },
        ],
    }
];

const rowActions = [
    {
        label: 'Remove action',
        action: 'remove-action',
        icon: Delete,
    },
];

const ListDemo = () => {

    const handler = async ({
        firstName,
        lastName,
    }, {
        limit,
        offset,
    }: ListHandlerPagination, sort: ListHandlerSortModel) => {

        // TODO
        console.log(sort);

        let rows = await Promise.resolve(mock);

        if (firstName) {
            rows = rows.filter((row) => row.firstName.includes(firstName));
        }

        if (lastName) {
            rows = rows.filter((row) => row.lastName.includes(lastName));
        }

        const { length: total } = rows;

        rows = rows.slice(offset, limit + offset);

        return {
            rows,
            total,
        };
    };

    const heightRequest = () => window.innerHeight - 50;

    const handleRowActionsClick = (row: any, action: string) => {
        alert(JSON.stringify({ row, action }, null, 2));
    };

    const handleAction = (action: string) => {
        alert(action);
    };

    const handleClick = (row: any) => {
        alert(JSON.stringify({ row }, null, 2));
    };

    return (
        <List
            title="List Component"
            filterLabel="Filters"
            heightRequest={heightRequest}
            rowActions={rowActions}
            actions={actions}
            filters={filters}
            columns={columns}
            handler={handler}
            selectionMode={SelectionMode.None}
            onRowAction={handleRowActionsClick}
            onRowClick={handleClick}
            onAction={handleAction}
            rowMark={row => row.color}
        />
    );
};

const View = () => (
    <ComponentWrapper>
        <ListDemo />
    </ComponentWrapper>
);

export const Desktop = View.bind({});

Desktop.argTypes = {
    filters: {
        name: 'filters',
        defaultValue: filters,
        readonly: true,
        control: {
            type: 'object',
        },
    },
    columns: {
        name: 'columns',
        defaultValue: columns,
        readonly: true,
        control: {
            type: 'object',
        },
    },
    actions: {
        name: 'actions',
        defaultValue: actions,
        readonly: true,
        control: {
            type: 'object',
        },
    },
    rowActions: {
        name: 'rowActions',
        defaultValue: rowActions,
        readonly: true,
        control: {
            type: 'object',
        },
    },
};

export default {
    title: 'List/View',
};
