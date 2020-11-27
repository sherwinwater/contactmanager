import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import { v4 as uuid } from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // check errors
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required",
        },
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required",
        },
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone is required",
        },
      });
      return;
    }

    const newContact = {
      // id: uuid(),
      name,
      email,
      phone,
    };
    // dispatch({ type: "ADD_CONTACT", payload: newContact });

    const res = await axios
      .post(`https://jsonplaceholder.typicode.com/users`, newContact);

      dispatch({ type: "ADD_CONTACT", payload: res.data });

    // axios
    //   .post(`https://jsonplaceholder.typicode.com/users`, newContact)
    //   .then((res) => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    type="name"
                    placeholder="enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    type="phone"
                    placeholder="enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="enter name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="enter email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="enter phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
