import React from 'react';
import { Paper, Grid, Typography, Tooltip, ButtonBase } from '@material-ui/core'

const SuggestedBook = ( props ) => {
    return (
        <Grid item xs={2} >
            <Tooltip title="Select">
                    <ButtonBase>
                <Paper sx={{ height: 140, width: 100 }} onClick={ props.clicked }>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={ props.thumbnail } alt={props.title} style={{width: '100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                {props.title}
                            </Typography>
                            <Typography variant='caption'>
                                {props.author.length > 0 ? props.author.map(author => `${author}`) : null}
                            </Typography>
                            {/* <Typography variant='body2' style={{overflow: 'scroll'}}>
                                {props.description}
                            </Typography> */}
                        </Grid>
                    </Grid>
                </Paper>
                </ButtonBase>
                </Tooltip>
            </Grid>
        )
}

export default SuggestedBook;