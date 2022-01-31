import React from 'react';

import { Drawer, Toolbar, TextField} from '@material-ui/core'


const MenuDrawer = ( props ) => {
    return (
        <Drawer role="presentation">
            <Toolbar />
            <Paper>
                <TextField variant='h6'>
                    Here we go
                </TextField>
            </Paper>
        </Drawer>
    )
};

export default MenuDrawer;
