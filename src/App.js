import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

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
        console.log(data);
        //the users becomes what the data.results is
        setUsers(data.results);
      });
  }
  //Sort ex. users.sort((a,b) => a.dob.age - b.dob.age)

  console.log(users);

  return (
    <div>
      <Table striped bordered hover>
        <thead></thead>
        <tbody>
          {/* Table row for first and last */}
          <div>
            {users.map((user) => (
              <tr>
                {/* image of person */}
                <td>
                  <Image src={user.picture.large} rounded />
                </td>
                {/* persons first and last name */}
                <td>
                  {user.name.first} {user.name.last}
                </td>
                {/* users cell phone number */}
                <td>
                  Phone Number:{` `}
                  {user.cell}
                </td>
                {/* users location */}
                <td>
                  {user.location.city},{` `}
                  {user.location.state},{` `}
                  {user.location.country}
                </td>
              </tr>
            ))}
          </div>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
