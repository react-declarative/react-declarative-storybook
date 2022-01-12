import * as React from 'react';

import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        paddingBottom: theme.spacing(2),
    },
    avatar: {
        height: 64,
        marginRight: theme.spacing(2),
        width: 64
    },
    avaterWrapper: {
        height: '100%',
    },
    content: {
        width: '100%',
    },
}));

export const AvatarPicker = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.avaterWrapper}>
                <Avatar
                    className={classes.avatar}
                    imgProps={{
                        crossOrigin: 'anonymous'
                    }}
                />
            </Box>
            <div className={classes.content}>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item>
                        <Button
                            color="primary"
                            size="small"
                            type="button"
                            variant="outlined"
                        >
                            Upload new picture
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            size="small"
                            type="button"
                            variant="text"
                        >
                            Delete
                        </Button>
                    </Grid>
                    <Grid item xs />
                    <Grid item>
                        <Button
                            color="secondary"
                            size="small"
                            type="button"
                            variant="outlined"
                        >
                            Verification
                        </Button>
                    </Grid>
                </Grid>
                <Typography
                    color="textSecondary"
                    variant="caption"
                >
                    Recommended dimensions: 200x200, maximum file size: 5MB
                </Typography>
            </div>
        </Box>
    );
};

