import React from 'react';
import { Paper, ButtonBase, Grid, Tooltip, Typography } from '@material-ui/core'
//import { styled } from '@mui/material/styles'

const ListedBook = ( props ) => {

    return (
            <Grid item xs={3} ind={props.ind} container direction='column' style={{ padding: '.5rem'}}>
                    <Tooltip title="Delete">
                        <ButtonBase className='capture'>
                        <Grid item xs={12}>
                            <img src={props.thumbnail} alt={ props.title } onClick={ props.clicked }/>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Typography>{props.title}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{props.authors}</Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{props.date}</Typography>

                        </Grid> */}
                    </ButtonBase>
                    </Tooltip>
            </Grid>

        )
};

export default ListedBook;

