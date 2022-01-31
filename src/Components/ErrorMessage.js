import React from 'react';

import { Grid, Typography, Paper, Button} from '@material-ui/core'

const ErrorMessage = ( props ) => {
    return(
        <Grid item>
            <Paper sx={{ height: 140, width: 100}} onClick={ props.clicked } >
                        <Grid item xs={12}>
                            <Typography variant='h6' style={{ padding: '20px'}}>
                                Something went wrong, please try again
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end'}}>

                            <Button onClick={ props.clicked } color='secondary' variant='contained' >
                                Close
                            </Button>
                        </Grid>
            </Paper>
        </Grid>
    )
};

export default ErrorMessage;
