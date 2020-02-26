import React, { Component } from "react";
//import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    user: "",
    password: ""
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Username:</label>
          <input type="text" />
          <label htmlFor="">Password:</label>
          <input type="text" />
          <label htmlFor="">Role:</label>
          <select name="" id="">
            <option value="">Parent</option>
            <option value="">Government</option>
            <option value="">Owner</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
