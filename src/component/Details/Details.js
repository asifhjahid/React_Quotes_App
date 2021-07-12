import React,{useContext} from "react";
import { GlobalContext } from "../Context/Global";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Details.css'

const Read = () => {
  const {users} = useContext(GlobalContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      <h1>Member NO: {user[0].id}</h1>
      <h1>Mess Member: {user[0].name}</h1>
      <h1>Home Town: {user[0].homeTown}</h1>
      <h1>Occupation: {user[0].occupation} </h1>
      <Link to="/">
        <Button variant="info">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Read;