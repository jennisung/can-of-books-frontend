import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import BookFormModal from '../BookFormModal'; 
import Button from 'react-bootstrap/Button';
import UpdateBookModal from './UpdateBookModal';
import '../styles/BestBooks.css'



class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      openModal: false,
      showModal: false,
      bookToUpdate: {}
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database */
  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let booksFromDB = await axios.get(url);

      this.setState({
        books: booksFromDB.data
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

// **** ADD CAT TO DB USING 2 HANDLERS ****

// *** 1ST HANDLER IS GOING TO BUILD THE CAT OBJECT USING THE FORM DATA ****
// *** 2nd HANDLER - POST THE Book OBJECT TO THE DATABASE AND UPDATE STATE WITH THE NEW CREATED Book****
postBook = async (bookObj) => {
try {
// TODO: build the url for axios to use
  let url = `${process.env.REACT_APP_SERVER}/books`;

// *** ON A POST - axios will take in 2 args. 1st - url, 2nd - data which is carried over on the req.body
  let createdBooksFromDB = await axios.post(url, bookObj);


// TODO: get the created cat and add it to state
this.setState({
    books: [...this.state.books, createdBooksFromDB.data]
  })

} catch (error) {
  console.log(error.message);
}
}

// ******* DELETING A Book FROM DB ******

deleteBook = async (id) => {
  try {
    // TODO: build the url for axios 
  let url = `${process.env.REACT_APP_SERVER}/books/${id}`

  await axios.delete(url);


  // TODO: update state after cat was deleted
  let updatedBooks = this.state.books.filter(books => books._id !== id);

    this.setState({
      books: updatedBooks
    })

  } catch (error) {
    console.log(error.message)
  }
}


// HANDLE MODAL FUNCTION

handleOpenModal = () => {
  this.setState({
    openModal: true
  })
}

handleCloseModal = () => {
  this.setState({
    openModal: false
  })
}

openUpdateModal = (bookToUpdate) => {
  console.log('book to update:', bookToUpdate)
  this.setState({
    showModal:true,
    bookToUpdate: bookToUpdate
  })
}

closeUpdateModal = () => {
  this.setState({
    showModal:false
  })
}


putBook = async (bookObj) => {
  try {
    let url = `${process.env.REACT_APP_SERVER}/books/${bookObj._id}`;

    console.log(url);

    let updatedBookFromAxios = await axios.put(url, bookObj);

    console.log(updatedBookFromAxios);

    let updatedBookArray = this.state.books.map(existingBook => {
      return existingBook._id === bookObj._id
      ? updatedBookFromAxios.data
      : existingBook
    });

    this.setState({
      books: updatedBookArray
    })
  } catch (error) {
    console.log(error.message);
  }
}


render() {
 /* TODO: render all the books in a Carousel */
return (
  <>
<BookFormModal
  show={this.state.openModal}
  handleClose={this.handleCloseModal}
  postBook={this.postBook}
  onBookDelete={this.handleBookDelete} 
  openUpdateModal={this.openUpdateModal}
/>

    <UpdateBookModal 
    showModal={this.state.showModal} 
    closeUpdateModal={this.closeUpdateModal} 
    bookToUpdate={this.state.bookToUpdate}
    putBook={this.putBook}
    />
  
  <Carousel className='carousel-container'>
          {this.state.books.length > 0 ? (
            this.state.books.map((book, index) => (
              
            <Carousel.Item key={index}>
              <Card className="books-card">

                <Card.Img src={book.image} alt={book.title} className="card-image" />
                <Card.Body>
               <Carousel.Caption> 
                
                <Button variant="secondary" onClick={()=> {this.deleteBook(book._id)}}>Delete</Button>
                <span style={{ margin: '0 6px' }}></span> 
                <Button variant="secondary" onClick={() => this.openUpdateModal(book)}>Update Book</Button>

                 </Carousel.Caption>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                <p>Description: {book.description}</p>
                <p>Status: {book.status} </p>
                    </Card.Text>
                  </Card.Body>
              </Card>
              {/* <Carousel.Caption> 
                
                <Button variant="secondary" onClick={()=> {this.deleteBook(book._id)}}>Delete</Button>
                <Button variant="secondary" onClick={() => this.openUpdateModal(book)}>Update Book</Button>

              </Carousel.Caption> */}
            </Carousel.Item>

            ))
          ) : (
          <h3>No Books Found</h3>
          )}
        </Carousel>
</>
);
}
}
  
  export default BestBooks;
  
  
  
    
  
