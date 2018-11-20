import React, { Component } from "react"
import { Link } from "react-router-dom"
import person from "./PersonIcon.png"
import "./Employee.css"

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={person} className="icon--person" />
                        {this.props.employee.name}
                        <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                            className="card-link">SACRIFICE</a>
                    </h5>
                </div>
            </div>
        )
    }
}