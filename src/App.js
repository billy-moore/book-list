import React, { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import axios from 'axios';
import { Grid, Container, Toolbar, Modal, Typography } from '@material-ui/core'

import ListedBook from './Components/ListedBook'
import SuggestedBooks from './Components/SuggestedBook'
import ErrorMessage from './Components/ErrorMessage'
import './App.css';

import NoImage from './img/NoImage.png'
import TopBar from './Components/TopBar'
import MenuDrawer from './Components/MenuDrawer'

function App() {
  const [ noError, setNoError ] = useState(true)
  const [ bookList, setBookList ] = useState([])
  const [ suggestedItems, setSuggestedItems ] = useState([])
  const [ currentBook, setCurrentBook ] = useState('')
  const [ drawerOpen, setDrawerOpen ] = useState( false )
  const [open, setOpen] = useState(false)
  const componentRef = useRef()
  const [ pageTitle, setPageTitle ] = useState('')
  const [ accentColor, setAccentColor ] = useState('transparent')
  const [ textSize, setTextSize ] = useState('h6')

  const API = 'AIzaSyDgWDON5TvhCO6crYyYfNOt9dPBucPdiNA'

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const pageTitleHandler = (e) => {
    e.preventDefault()
    setPageTitle(prev => e.target.value )
  }

  //  0802412858     078141251X   0399592555  

  const getBook = async () => {
      let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${currentBook}+isbn:${currentBook}&key=${API}`)
      let data = res.data.items
      if (data === undefined ) {
        setNoError(false)
        setOpen(prev=> true)
      } else if ( data.length > 0){
        setSuggestedItems(prev => [...data])
        setOpen(prev => true)
        setCurrentBook(prev => '')
      } else {
      console.log( 'error!' )
    }
    
}

  const selectItem = (item) => {
    setBookList(oldList => [...oldList, item])
    setSuggestedItems(list => [])
    setOpen(prev => false)

  }
  const deleteBook = ( book, index ) => {
    bookList.splice(index, 1)

    setBookList(prevList => [...prevList])
  }

  const searchBook = (e) => {
    e.preventDefault()
    setCurrentBook( e.target.value.trim() )
  }


  const closeModal = () => {
    setNoError(prevEr => true)
    setCurrentBook(prevBook => '')
    setCurrentBook(prev => '')
    setOpen(prev => false)
  }

  const drawerToggle = () => {
    setDrawerOpen(prev => !prev)
  }

  const textChangeHandler = ( text ) => {
    setTextSize(prev => text)
    console.log( textSize )
  }

  const colorChangeHandler = ( color ) => {
    setAccentColor(prev => color)
    console.log( accentColor )
  }

  const colorResetHandler = () => {
    setAccentColor(prev => 'transparent')
    console.log(accentColor)
  }
  
  //  0802412858     078141251X   0399592555  


  const suggestedBook = suggestedItems.map((book, index) => <SuggestedBooks key={ book.id+index } title={ book.volumeInfo.title } author={book.volumeInfo.authors} thumbnail={ book?.volumeInfo?.imageLinks?.thumbnail && book.volumeInfo.imageLinks.thumbnail || NoImage } clicked={(e) => selectItem(book)} />)
  const currentList = bookList && noError && bookList.map((books, index) => <ListedBook key={books.id+index} ind={index} thumbnail={books?.volumeInfo?.imageLinks?.thumbnail && books.volumeInfo.imageLinks.thumbnail || NoImage } title={books.volumeInfo.title} date={books.volumeInfo.publishedDate} authors={books.volumeInfo.authors} clicked={(e) => deleteBook(books, index)} />)
  const errorMessage = <ErrorMessage clicked={ closeModal }/>

  return (
    <Container className='App' >
      <Grid container>
        
        <TopBar 
          value={ currentBook }
          changes={ (e) => searchBook(e) }
          sdisable={ !currentBook }
          exdisable= { bookList.length === 0 }
          sClick={ getBook }
          exClick={ handlePrint }
          menuToggle={ drawerToggle }
        />
          <Toolbar />
          <MenuDrawer 
            open={ drawerOpen }
            titleUpdate={ (e) => pageTitleHandler(e) }
            defaultText={ textSize }
            textUpdate={text => textChangeHandler( text )}
            drawerToggle={ drawerToggle }
            currentTitle={ pageTitle }
            accentColor={ accentColor }
            changeColor={color => colorChangeHandler(color)}
            colorReset={ colorResetHandler }
          />
          <Modal open={open} onClose={ () => setOpen(prev=> false) } >
                <Grid item container xs={12} justifyContent='center' spacing={3} style={{ 
                position: 'absolute', 
                top: '50%', left: '50%', 
                transform: 'translate(-50%, -50%)', 
                // width: 400, 
                bgcolor: 'background.paper', 
                // border: '2px solid #000', 
                boxShadow: 24, 
                p: 4 }} >
              {noError ? suggestedBook : errorMessage}
            </Grid>
          </Modal>
          
          <Grid item container xs={12} style={{padding: '3rem'}} ref={componentRef} justifyContent='flex-start'>
            <Grid item xs={12} container style={{ display: 'flex', justifyContent: 'flex-start'}}>
              <Typography variant={ textSize }>{pageTitle}</Typography>
            </Grid>
            <div style={{ height: '6px', width: '60%', backgroundColor: accentColor }}/>
            <Grid item xs={12} style={{ paddingTop: '1rem', paddingBottom: '1rem'}}/>
            { currentList }
          </Grid>
      </Grid>
    </Container>
      
  );
}

export default App;
