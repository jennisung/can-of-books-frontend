import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel>
          {this.state.books.length > 0 ? (
            this.state.books.map((book, index) => (
              <Carousel.Item key={index}>
                <Card className="books-card">
                  <Card.Img src={book.image} alt={book.title} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      <p>Description: {book.description}</p>
                      {/* <p>Status: {book.status}</p> */}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))
          ) : (
            <h3>No Books Found :</h3>
          )}
        </Carousel>
      </>
    );
  }
}

export default BestBooks;
