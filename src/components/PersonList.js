import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4 text-white bg-success py-2">User List</h2>
        <div className="row">
          {this.state.persons.map(person => (
            <div key={person.login.uuid} className="col-12 mb-3">
              <div className="card text-white bg-info w-100">
                <div className="card-body">
                  <div className="row">
                    {/* Profile Picture */}
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                      <img
                        src={person.picture.large}
                        alt={person.name.first}
                        className="img-fluid rounded-circle"
                        style={{ maxWidth: '150px' }}
                      />
                      <button className="btn btn-primary mt-3">Details</button>
                    </div>
                    {/* User Details */}
                    <div className="col-md-9">
                      <h5 className="card-title">
                        {person.name.title} {person.name.first} {person.name.last}
                      </h5>
                      <p className="card-text">
                        <strong>User Name:</strong> {person.login.username}<br />
                        <strong>Gender:</strong> {person.gender}<br />
                        <strong>Time Zone Description:</strong> {person.location.timezone.description}<br />
                        <strong>Address:</strong> {`${person.location.street.number}, ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}, ${person.location.postcode}`}<br />
                        <strong>Birth Date and Age:</strong> {person.dob.date} ({person.dob.age} years)<br />
                        <strong>Register Date:</strong> {person.registered.date}<br />
                        <strong>Phone:</strong> {person.phone}<br />
                        <strong>Email:</strong> {person.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PersonList;
