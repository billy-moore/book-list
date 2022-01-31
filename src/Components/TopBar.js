import React from 'react';

import { AppBar, Toolbar, Grid, TextField, Button, IconButton} from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = ( props ) => {
    return (
        <AppBar>
        <Toolbar >
        <Grid container spacing={2} justifyContent='space-between'>
            <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-start'}}>
                <IconButton onClick={ props.menuToggle }>
                    <MenuIcon style={{color: 'white'}}/>
                </IconButton>
            </Grid>
            <Grid item xs={9} container spacing={1}>
            <Grid item xs={9}>
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
            <Grid item xs={3}>
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
            
            </Grid>

        <Grid item xs={2}>
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
