import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context/Global";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const Delete = () => {
  const{removeUser} = useContext(GlobalContext);
  
  const { id } = useParams();

  return (
    <div> 
      <Modal.Dialog>
        <Modal.Header closeButton> 
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        
          <Modal.Footer>
          <Link to="/">
            <Button className="delete__btn" variant="info">Cancel</Button>
            </Link>
           
                  <Link to='/'>
                  <Button onClick={() => removeUser(id)} variant="danger">
                    Delete
                  </Button>
                  </Link>

     
           
         
        </Modal.Footer>

      
        
      </Modal.Dialog>
    </div>
  );
};

export default Delete;