import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export default function Routes() {
    const history = useHistory()
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const dummyUser = {
    username: "demo",
    password: "demo",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == dummyUser.username && password == dummyUser.password) {
      setUser(true);
      history.push('/')

    } else {
      alert("Incorrect Username and Password");
    }
  };

  const handleUsername = (e) => {
    console.log("wrkin");
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleHome = () => {
    history.push('/')
  }

  const handleLogout = () => {
      setUser(false)
  }

  return (
    <Switch>
      {/* Finally, catch all unmatched routes */}
      <Route exact path="/">
        {user ? <Home /> : <Login handleUsername={handleUsername} handlePassword={handlePassword} handleSubmit={handleSubmit}/>}
      </Route>

      <Route exact path="/login">
      {user ? ()=> (<div style={{textAlign: "center"}}><h2 >Already Logged In</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleHome}>Home</button></div>) : <Login handleUsername={handleUsername} handlePassword={handlePassword} handleSubmit={handleSubmit}/>}
      </Route>
    </Switch>
  );
}
