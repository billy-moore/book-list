import React, { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import axios from 'axios';
import { Grid, TextField, Button, Container, AppBar, Toolbar, Modal, Typography } from '@material-ui/core'

import ListedBook from './Components/ListedBook'
import SuggestedBooks from './Components/SuggestedBook'

import './App.css';

function App() {
  const [ noError, setNoError ] = useState(true)
  const [ bookList, setBookList ] = useState([])
  const [ suggestedItems, setSuggestedItems ] = useState([])
  const [ currentBook, setCurrentBook ] = useState('')
  const [open, setOpen] = useState(false)
  const componentRef = useRef()

  const API = 'AIzaSyDgWDON5TvhCO6crYyYfNOt9dPBucPdiNA'

  const handleClose = () => setOpen(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const getBook = async () => {
    try{
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${currentBook}+isbn:${currentBook}&key=${API}`)
      .then(data => setSuggestedItems(oldPull => [...data.data.items]))
    } catch {
      setNoError(true)
    }
    setOpen(fact => true)
    setCurrentBook(prev=> '')
  }

  const selectItem = (item) => {
    setBookList(oldList => [...oldList, item])
    setSuggestedItems(list => [])
    handleClose()
  }
  const deleteBook = ( book, index ) => {
    bookList.splice(index, 1)

    setBookList(prevList => [...prevList])
  }

  const searchBook = (e) => {
    e.preventDefault()
    setCurrentBook( e.target.value )
  }

  const closeModal = () => {

    setNoError(prevEr => true)
    setCurrentBook(prevBook => '')
    handleClose()
  }

  //  0802412858     078141251X   0399592555  

  const suggestedBook = suggestedItems && noError && suggestedItems.map((book, index) => <SuggestedBooks key={ book.id+index } title={ book.volumeInfo.title } author={book.volumeInfo.authors} thumbnail={book.volumeInfo.imageLinks.thumbnail || null } clicked={(e) => selectItem(book)} />)
  const currentList = bookList && noError && bookList.map((books, index) => <ListedBook key={books.id+index} ind={index} thumbnail={books.volumeInfo.imageLinks.thumbnail || null } title={books.volumeInfo.title} clicked={(e) => deleteBook(books, index)} />)
  
  return (
    <Container className='App' >
      <Grid container>
        
        <AppBar>
          <Toolbar >
          <Grid container spacing={2} justifyContent='flex-end' >
              <Grid item xs={5}>
                <TextField 
                    size='small'
                    fullWidth
                    variant='outlined'
                    placeholder='ISBN'
                    value={ currentBook }
                    style={{ backgroundColor: 'white', borderRadius: '4px'}}
                    onChange={ (e) => searchBook(e)}
                  />
              </Grid>

            <Grid item >
              <Button
                size='large'
                variant='contained'
                color='primary'
                onClick={ getBook }
                disabled={!currentBook}
              >
                Search
              </Button>
            </Grid>

            <Grid item >
              <Button
                size='large'
                variant='contained'
                color='secondary'
                onClick={handlePrint}
                >
                  Export
                </Button>
            </Grid>

          </Grid>
          </Toolbar>
        </AppBar>
          <Toolbar />
          <Modal open={open} onClose={ handleClose } >
            {noError ? <Grid item contianer xs={12} justifyContent='center' spacing={3} style={{ 
                position: 'absolute', 
                top: '50%', left: '50%', 
                transform: 'translate(-50%, -50%)', 
                // width: 400, 
                bgcolor: 'background.paper', 
                // border: '2px solid #000', 
                boxShadow: 24, 
                p: 4 }}>
                  <Grid item xs={12}>
                        <Typography variant='h6'>Something Went Wrong, Try Again</Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <Button color='secondary' onClick={closeModal} >Close</Button>
                  </Grid>
            </Grid> :
                <Grid item container xs={12} justifyContent='center' spacing={3} style={{ 
                position: 'absolute', 
                top: '50%', left: '50%', 
                transform: 'translate(-50%, -50%)', 
                // width: 400, 
                bgcolor: 'background.paper', 
                // border: '2px solid #000', 
                boxShadow: 24, 
                p: 4 }} >
              { suggestedBook }
            </Grid>}
          </Modal>
          
          <Grid item container xs={12} style={{padding: '3rem'}} ref={componentRef}>
            { currentList }
          </Grid>
      </Grid>
    </Container>
      
  );
}

export default App;
