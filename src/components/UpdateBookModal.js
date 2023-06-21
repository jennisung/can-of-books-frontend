import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class UpdateBookModal extends React.Component {


  handleBookUpdate = (event) => {
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
      _id: this.props.bookToUpdate._id,
      __v: this.props.bookToUpdate.__v
    }

    this.props.putBook(bookToUpdate)
  }

  

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeUpdateModal}>
      <Container className="mt-5">    
      <Form onSubmit={this.handleBookUpdate}>
        <Form.Group controlId="title">
          <Form.Label>Book Title:</Form.Label>
          <Form.Control type="text" placeholder="title" defaultValue={this.props.bookToUpdate.title} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" placeholder="description" defaultValue={this.props.bookToUpdate.description} />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Read Status:</Form.Label>
          <Form.Check type="checkbox" label="Check If Read" defaultChecked={this.props.bookToUpdate.status} />
        </Form.Group>
        <Button  variant="secondary" type="submit">Add Book</Button>
      </Form>
      </Container>
      </Modal>
)
  }
}


export default UpdateBookModal





// class UpdateBookModal extends React.Component {
//   render() {
//     return (
//       <Modal show={this.props.showModal} onHide={this.props.closeUpdateModal}>
//         <Container className="mt-5">    
//           <Form>
//             <Form.Group controlId="title">
//               <Form.Label>Book Title:</Form.Label>
//               <Form.Control type="text" placeholder="title" />
//             </Form.Group>
//             <Form.Group controlId="description">
//               <Form.Label>Description:</Form.Label>
//               <Form.Control type="text" placeholder="description" />
//             </Form.Group>
//             <Form.Group controlId="status">
//               <Form.Label>Read Status:</Form.Label>
//               <Form.Check type="checkbox" label="Check If Read" />
//             </Form.Group>
//             <Button variant="secondary" type="submit">Add Book</Button>
//           </Form>
//         </Container>
//       </Modal>
//     );
//   }
// }