import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NewDrinkForm(props){
  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>What's on Tap?</Form.Label>
          <Form.Control type="text" placeholder="Drink Name"></Form.Control>
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>What Kind of Drink is it?</Form.Label>
          <Form.Control type="text" placeholder="IPA/Stout/Kombucha/Rootbeer/Etc..."></Form.Control>
        </Form.Group>
        <Form.Group controlId="brewer">
          <Form.Label>Who Made it?</Form.Label>
          <Form.Control type="text" placeholder="Brewer Name"></Form.Control>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Add a Short Description</Form.Label>
          <Form.Control type="text" placeholder="What's it Taste Like?  What's it Smell Like?"></Form.Control>
        </Form.Group>
        <Form.Group controlId="alcholoContent">
          <Form.Label>How Boozy is it?</Form.Label>
          <Form.Control type="text" placeholder="0.0%"></Form.Control>
        </Form.Group>
        <Button variant="outline-dark" type="submit">Add Tap</Button>
      </Form>
    </React.Fragment>
  );
}

export default NewDrinkForm;