import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

//state is kind of like a global variable, when it updates it will
//rerender the component you are in. When it changes it will show you
//the updated version of it.

//useEffect is kind of like use something when something changes
//you tell it what to watch and what to do.
//telling the useEffect to watch something, it will rerun a function
//having it watch nothing it will only run once when the
//component mounts(when you initially render the component)

//when you load a web page app.js mounts
//when you reload it remounts
//when you update the state and it rerenders it does not remount

function App() {
  const url = "https://randomuser.me/api/?results=5";
  //[name of state, function to change state]
  //useState returns an array of the state and the function and destructures it
  //to two separate variables
  //                                empty square is our starting state
  const [users, setUsers] = useState([]);

  //the brackets is where you hold the things you want to watch
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //the users becomes what the data.results is
        setUsers(data.results);
      });
  }

  const sortUsers = function sortUsers() {
    users.sort((a, b) => a.dob.age - b.dob.age);
    console.log(users);
  };

  return (
    <div>
      <Container className="title">
        <h1>Employee Directory</h1>
      </Container>
      <Container className="info">
        <Row>
          <Button type="button" onClick={sortUsers}>
            Sort by Age
          </Button>
        </Row>
        <Row>
          <Table className="table" striped bordered hover>
            <thead></thead>
            <tbody>
              {/* Table row for first and last */}

              {users.map((user) => (
                <tr className="tabelRow">
                  {/* image of person */}
                  <td className="td">
                    <Image src={user.picture.large} rounded />
                  </td>
                  {/* persons first and last name */}
                  <td className="td">
                    {user.name.first}
                    {` `}
                    {user.name.last}
                  </td>
                  <td className="td">
                    Age:{` `}
                    {user.dob.age}
                  </td>
                  {/* users cell phone number */}
                  <td className="td">
                    Phone Number:{` `}
                    {user.cell}
                  </td>
                  {/* users location */}
                  <td className="td">
                    {user.location.city},{` `}
                    {user.location.state},{` `}
                    {user.location.country}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default App;
