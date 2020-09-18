import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NewDrinkForm(props){

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation(
      {
        name: event.target.name.value, 
        type: event.target.type.value, 
        brewer: event.target.brewer.value, 
        description: event.target.description.value, 
        alcoholContent: event.target.alcoholContent.value,
        pintPrice: event.target.pintPrice.value,
        pitcherPrice: event.target.pitcherPrice.value,
        quantity: 124, 
        id: v4()
      }
    );
  }

  const button={
    borderRadius: 0,
    borderColor: "lightgray"
  }

  const form={
    width: "100%",
    margin: 0,
    padding: 0
  }

  return (
    <React.Fragment>
      <Container style={form}>
        <h3>Enter New Tap Information Here</h3>
        <hr />
        <Form onSubmit={handleNewDrinkFormSubmission}>
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
            <Form.Control as="textarea" rows="3" placeholder="What's it Taste Like?  What's it Smell Like?"></Form.Control>
          </Form.Group>
          <Form.Group controlId="alcoholContent">
            <Form.Label>How Boozy is it?</Form.Label>
            <Form.Control type="number" placeholder="0.0%"></Form.Control>
          </Form.Group>
          <Form.Group controlId="pintPrice">
            <Form.Label>How Much for a Pint?</Form.Label>
            <Form.Control type="number" placeholder="$0.00"></Form.Control>
          </Form.Group>
          <Form.Group controlId="pitcherPrice">
            <Form.Label>How Much for a Pitcher?</Form.Label>
            <Form.Control type="decimal" placeholder="$0.00"></Form.Control>
          </Form.Group>
          <Button variant="outline-dark" style={button} type="submit" block>Add Tap</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
}

export default NewDrinkForm;