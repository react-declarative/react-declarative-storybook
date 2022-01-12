import * as React from 'react';

import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useConfirm } from 'react-declarative';

const useStyles = makeStyles({
    root: {
        height: 45,
    },
})

export const RemoveAccount = () => {
    const classes = useStyles();

    const pickConfirm = useConfirm({
        title: 'Disable account',
        msg: 'Your accound will be shedule for removal. Are you sure you want to continue?',
    });

    const handleClick = () => pickConfirm().then((result) => {
        if (result) {
            alert('bang!');
        }
    });

    return (
        <Box className={classes.root}>
            <Button
                color="primary"
                size="small"
                type="button"
                variant="outlined"
                onClick={handleClick}
            >
                Remove account
            </Button>
        </Box>
    );
};
