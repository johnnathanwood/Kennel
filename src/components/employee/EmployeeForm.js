import React, { Component } from "react"
import "./Employee.css"

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        employeeName: "",
        animal: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewEmployee= evt => {
        evt.preventDefault()
        if (this.state.employeeName === "" && this.state.animal === "") {
            window.alert("Hey!\nFill everything out before continuing")
        } else {
            const employee = {
                name: this.state.employeeName,
                animalId: this.props.animals.find(e => e.name === this.state.animal).id,
                locationId: this.props.locations.find(e => e.name === this.state.location).id
            }

            // Create the animal and redirect user to animal list
            this.props.addEmployee(employee).then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="employeeName"
                               placeholder="Employee name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal">Assign animal</label>
                        <select defaultValue="" name="animal" id="animal"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an animal</option>
                        {
                            this.props.animals.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Assign location</label>
                        <select defaultValue="" name="location" id="location"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an location</option>
                        {
                            this.props.locations.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

