import React from 'react';

import { Drawer, Grid, Typography, TextField, Paper, Button, RadioGroup, FormControlLabel, Radio, FormControl} from '@material-ui/core'
import { ColorPicker } from 'material-ui-color';
import { ColorPalette } from 'material-ui-color';
const MenuDrawer = ( props ) => {

    const palette = {
        red: '#ff0000',
        blue: '#0000ff',
        green: '#00ff00',
        yellow: 'yellow',
        cyan: 'cyan',
        lime: 'lime',
        gray: 'gray',
        orange: 'orange',
        purple: 'purple',
        black: 'black',
        white: 'white',
        pink: 'pink',
        darkblue: 'darkblue',
        transparent: 'transparent'
      };

    return (
        <Drawer role="presentation" open={ props.open } anchor='top' onClose={ props.closeDrawer }>
            <Paper style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
            
            <Grid container style={{padding: '2rem'}} >
                <Grid item container xs={4} justifyContent='center'>
                    <Grid item xs={12}>
                    <Typography variant='h5' align='center'>Page Label</Typography>

                    </Grid>
                    <TextField 
                        variant='filled' 
                        size='small'
                        onChange={ props.titleUpdate }
                        value={ props.currentTitle }
                        placeholder={'Page Label'}
                        helperText="Change the title of your page"
                    />
                </Grid>
                <Grid item container xs={4}>
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center' >Font Size</Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent='center'>
                        <FormControl>
                            <RadioGroup
                                aria-label='Font Sizing'
                                value={ props.defaultText }
                                name='Font Size'
                                onChange={e => props.textUpdate(e.target.value)}
                            >
                                <FormControlLabel value='h6' control={<Radio />} label='small' />
                                <FormControlLabel value='h4' control={<Radio />} label='medium' />
                                <FormControlLabel value='h2' control={<Radio />} label='large' />
                            </RadioGroup>
                        </FormControl>
                        
                    </Grid>
                    
                </Grid>
                <Grid item container xs={4}>
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center'>Accent Color</Typography>

                    </Grid>
                    <Grid item xs={12} container justifyContent='center'>
                    <ColorPalette
                        palette={ palette }
                        defaultValue= 'transparent'
                        value={ props.accentColor }
                        onSelect={(color) => props.changeColor(color)}
                        />
                    <Grid item xs={12}>
                        <Button fullWidth onClick={ props.colorReset } variant='outlined' color='secondary'>
                            Reset Color
                        </Button>
                    </Grid>
                    
                    </Grid>
                    
                </Grid>
                
                
            </Grid>
            <Grid container>
                    <Button fullWidth style={{height: 50, fontSize: '1.5rem'}} onClick={ props.drawerToggle } color='primary' variant='contained' >
                        Submit
                    </Button>
                </Grid>
            </Paper>
            
        </Drawer>
    )
};

export default MenuDrawer;
