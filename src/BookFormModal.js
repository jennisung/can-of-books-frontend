import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles/BookFormModal.css'


class BookFormModal extends Component {
  handleBooksSubmit = (event) => {
    event.preventDefault();
    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
    };
    this.props.postBook(bookObj);
  };

 

  render() {
    return (
      <div className="form-div">
      {/* <Form onSubmit={this.handleBooksSubmit}> */}
      <Form onSubmit={this.props.postBook}>
        <Form.Group controlId="title">
          <Form.Label>Book Title:</Form.Label>
          <Form.Control type="text" placeholder="title" />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" placeholder="description" />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Read Status:</Form.Label>
          <Form.Check type="checkbox" label="Check If Read" />
        </Form.Group>
        <Button  variant="secondary" type="submit" className="form-button">Add Book</Button>
      </Form>
      </div>

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
