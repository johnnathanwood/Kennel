import React, { Component } from "react"
import "./Location.css"

export default class LocationForm extends Component {
    // Set initial state
    state = {
        name: "",
        address: "",
        employee: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating location object, and
        invoking the function reference passed from parent component
     */
    constructNewLocation = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a Employee")
        } else {
            const location = {
                name: this.state.name,
                address: this.state.address,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            }

            // Create the location and redirect user to location list
            this.props.addLocation(location).then(() => this.props.history.push("/locations"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="locationForm">
                    <div className="form-group">
                        <label htmlFor="locationName">Location name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="locationName"
                               placeholder="location name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="address" placeholder="Address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to Manager</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewLocation} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

