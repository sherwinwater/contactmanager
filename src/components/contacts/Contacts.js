import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // constructor() {
  //   super();
  //   this.

  // deleteContact = (id, e) => {
  //   console.log("d");
  //   const { contacts } = this.state;
  //   // const newContacts = this.state.contacts.filter(contact=>contact.id !== id);
  //   const newContacts = contacts.filter((contact) => contact.id !== id);
  //   this.setState({
  //     contacts: newContacts,
  //   });
  // };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span>List
              </h1>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }

  // render() {
  //   const { contacts } = this.state;
  //   return (
  //     <React.Fragment>
  //       {contacts.map((contact) => (
  //         <Contact
  //           key={contact.id}
  //           contact={contact}
  //           deleteClickHandler={this.deleteContact.bind(this, contact.id)}
  //           // name={contact.name}
  //           // email={contact.email}
  //           // phone={contact.phone}
  //         />
  //       ))}
  //     </React.Fragment>
  //   );
  // }
}
export default Contacts;
