import React, { Component } from "react";
import { Link } from "react-router-dom";
class Clients extends Component {
  render() {
    const clients = [
      {
        id: "200252",
        firstName: "Rayhan",
        lastName: "Ahmed",
        email: "rayhan@gmail.com",
        phone: "01717272999",
        balance: "50.43",
      },
    ];
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users"></i> Clients{" "}
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      {" "}
                      <i className="fas fa-arrow-circle-right"> Details</i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}
export default Clients;
