import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/Global";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const{users,editUser} = useContext(GlobalContext);
  console.log(users);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [name, setName] = useState(user[0].name);
  const [homeTown, setHomeTown] = useState(user[0].position);
  const [occupation, setOccupation] = useState(user[0].salary);
  

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    user[0].name = edited_name;
  };

  const editHomeTown = (e) => {
    setHomeTown(e.target.value);
    const edited_Home_Town = homeTown;
    user[0].homeTown = edited_Home_Town;
  };

  const editOccupation = (e) => { 
    setOccupation(e.target.value);
    const edited_occupation = occupation;
    user[0].occupation = edited_occupation;
  };

  const editUsers = (e) => {
    e.preventDefault();
    editUser([...users]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>Member NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Mess Member</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={user[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Home Town</Form.Label>
          <Form.Control
            type="text"
            name="homeTown"
            value={homeTown}
            onChange={editHomeTown}
            placeholder={user[0].homeTown}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            type="text"
            name="occupation"
            value={occupation}
            onChange={editOccupation}
            placeholder={user[0].occupation}
          />
        </Form.Group>
        <Link to="/" className='editStyle'>
          <Button onSubmit={()=>editUsers} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;