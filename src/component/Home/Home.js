import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/Global";
import "./Home.css";



const Home = () => {
  const {users} = useContext(GlobalContext);

  return (
    <div className='homeStyle'>
      <Link to="/create" className='homeCreateBtn'>
        <Button className="create_btn" variant="primary">
          Create User
        </Button>
      </Link> 

      <Table striped bordered className='TableStyle'> 
        <thead>
          <tr className='tblStyle'>
            <th>Member No</th>
            <th>Mess Member</th>
            <th>Home Town</th>
            <th>Occupation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.homeTown}</td>
              <td>{user.occupation}</td>
              <td className='btnStyle'>
                <Link to={"/read/"+user.id}>
                  <Button className="action_btn" variant="success">
                    Details
                  </Button>
                </Link>
                <Link to={"/edit/"+user.id}>
                <Button className="action_btn" variant="info">
                  Edit
                </Button>
                </Link>
                <Link to={"/delete/"+user.id}>
                <Button className="action_btn" variant="danger">
                  Delete
                </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;