import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/Global";
import './Create.css' 

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [occupation, setOccupation] = useState("");


  const {users, addUser} = useContext(GlobalContext);
  
  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };
 
  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateHomeTown = (e) => {
    setHomeTown(e.target.value);
  };

  const updateOccupation= (e) => {
    setOccupation(e.target.value);
  };

  const onSubmit = (e)=>{
      e.preventDefault();

      addUser({...users,id,name,homeTown,occupation})

    }
   
  return (
    <div className="create">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mess Member</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Home Town</Form.Label>
          <Form.Control
            type="text"
            name="homeTown"
            value={homeTown}
            onChange={updateHomeTown}
            placeholder="Enter Home Town"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            type="text"
            name="occupation"
            value={occupation}
            onChange={updateOccupation}
            placeholder="Enter Occupation"
          />
        </Form.Group>
        <div className='createBtn'>
        <Button className="action_btn" variant="primary" type="submit">
          Create User
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
         </Link>
        </div>
      </Form>
    </div>
  );
};

export default Create;