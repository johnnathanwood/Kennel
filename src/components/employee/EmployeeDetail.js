import React, { Component } from "react"
import "./Employee.css"
import person from "./PersonIcon.png"
import AnimalCard from "../animal/AnimalCard"   



export default class EmployeeDetail extends Component {

    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}
        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={person} className="icon--person" />
                            {employee.name}
                        </h4>
                        <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>
                        <a href=" "
                            onClick={() => this.props.deleteEmployee(employee.id)
                                            .then(() => this.props.history.push("/employees"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}