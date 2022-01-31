import React from 'react';

import { AppBar, Toolbar, Grid, TextField, Button} from '@material-ui/core'


const TopBar = ( props ) => {
    return (
        <AppBar>
        <Toolbar >
        <Grid container spacing={2} justifyContent='flex-end' >
            <Grid item xs={5}>
            <TextField 
                size='small'
                fullWidth
                variant='outlined'
                placeholder='ISBN'
                value={ props.value }
                style={{ backgroundColor: 'white', borderRadius: '4px'}}
                onChange={ props.changes }
                />
            </Grid>

        <Grid item >
            <Button
            size='large'
            variant='contained'
            color='primary'
            onClick={ props.sClick }
            disabled={ props.sdisable }
            >
            Search
            </Button>
        </Grid>

        <Grid item >
            <Button
            size='large'
            variant='contained'
            color='secondary'
            disabled={ props.exdisable }
            onClick={ props.exClick }
            >
                Export
            </Button>
        </Grid>

        </Grid>
        </Toolbar>
    </AppBar>
    )
};

export default TopBar;
