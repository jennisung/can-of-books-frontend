import { Component } from "react";
import Card from 'react-bootstrap/Card';
import './styles/About.css'



class Profile extends Component {
  render() {
    return (
      <>
        <div className="about-us-div">
          <h2 className="about-us-title">About Us</h2>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Jennifer Sung</Card.Title>
              <Card.Subtitle className="">Frontend Developer</Card.Subtitle>
              <Card.Text>
                  {/* Add text */}
              </Card.Text>
              <Card.Link href="https://github.com/jennisung">GitHub Profile</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Kyle Knight</Card.Title>
              <Card.Subtitle className="">Backend Developer</Card.Subtitle>
              <Card.Text>
                  {/* Add text */}
               </Card.Text>
              <Card.Link href="https://github.com/mrkyleknight">GitHub Profile</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Profile;
