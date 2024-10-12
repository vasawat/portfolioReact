import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'black',
    },
  },
});


export default function DialogProject(params) {

    const { name, link, description, image} = params;

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

      return (
        <>
        <ThemeProvider theme={darkTheme}>
            <Button variant="outlined" onClick={handleClickOpen} 
            sx={{
                color: '#48CFCB',
                borderColor: '#48CFCB',
                '&:hover': {
                    backgroundColor: '#48CFCB',
                    color: 'black',
                },
            }}>
                See Detail
            </Button>
            <Dialog 
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2, color: '#48CFCB' }} id="customized-dialog-title">
                    <p className='text-2xl font-bold'>{name}</p>
                </DialogTitle>
                <IconButton aria-label="close" onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: '#48CFCB',
                })}
                >
                <CloseIcon />
                </IconButton>

                <DialogContent dividers>
                    <Typography sx={{ mt: 2, mb: 5 }} gutterBottom>
                        <img src={image} alt="" />
                    </Typography>
                    <Typography gutterBottom>
                        {description}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <a href={link}>
                        <Button sx={{ color: '#48CFCB', borderColor: '#48CFCB' }} autoFocus onClick={handleClose}>
                            go to this site
                        </Button>
                    </a>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
            
        </>
  );
    
};
