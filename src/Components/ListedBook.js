import React from 'react';
import { ButtonBase, Grid, Tooltip } from '@material-ui/core'
//import { styled } from '@mui/material/styles'

const ListedBook = ( props ) => {

    return (
            <Grid item xs={3} ind={props.ind}>
                <Tooltip title="Delete">
                    <ButtonBase className='capture'>
                        <img src={props.thumbnail} alt={ props.title } style={{width: '150px'}} onClick={ props.clicked }/>
                    </ButtonBase>
                </Tooltip>
            </Grid>

        )
};

export default ListedBook;

