import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class BookFormModal extends Component {
  handleBooksSubmit = (event) => {
    event.preventDefault();
    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };
    this.props.postBook(bookObj);
  };

 

  render() {
    return (
      <Form onSubmit={this.handleBooksSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Book Title:</Form.Label>
          <Form.Control type="text" placeholder="title" />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" placeholder="description" />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status:</Form.Label>
          <Form.Control type="text" placeholder="status" />
        </Form.Group>
        <Button type="submit">Add Book</Button>
        {/* <Button onClick={this.deleteBook}>Delete</Button> */}
        {/* <Button onClick={() => this.props.deleteBook(this.props.books._id)}>Delete</Button> */}
      </Form>
    );
  }
}

export default BookFormModal;


// import React, { Component } from 'react';
// import { Form, Button } from 'react-bootstrap';

// class BookFormModal extends Component {
//   handleBooksSubmit = (event) => {
//     event.preventDefault();
//     console.log(event)
//   let bookObj = {
//       title: event.target.title.value,
//       description: event.target.description.value,
//       status: event.target.status.value,
//     }
//     console.log(bookObj);
//     this.props.postBook(bookObj);
//   }


    
//   render() {
//     return (
//       <Form onSubmit={this.handleBooksSubmit}>
//         <Form.Group controlId="title">
//           <Form.Label>Book Title:</Form.Label>
//           <Form.Control type="text" placeholder='title' />
//         </Form.Group>
//         <Form.Group controlId="description">
//           <Form.Label>Description:</Form.Label>
//           <Form.Control type="text" placeholder='description' />
//         </Form.Group>
//         <Form.Group controlId="status">
//           <Form.Label>Status:</Form.Label>
//           <Form.Control type="text" placeholder='status' />
//         </Form.Group>
//         <Button type="submit">Add Book</Button>
//       </Form>
//     );
//   }
// }
 

// export default BookFormModal;
