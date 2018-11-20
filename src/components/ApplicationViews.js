import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalManager from "../modules/AnimalManager"
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationList from './location/LocationList'
import LocationDetail from "./location/LocationDetail"
import LocationManager from "../modules/LocationManager"
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeManager from "../modules/EmployeeManager"


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations: [],
        owner: []
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })

    }
    addAnimal = (animal) => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        })
        )
    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            })
            )
    }
    deleteLocation = id => {
        return fetch(`http://localhost:5002/locations/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/locations`))
            .then(e => e.json())
            .then(locations => this.setState({
                locations: locations
            })
            )
    }
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList
                        locations={this.state.locations}
                        deleteLocation={this.deleteLocation} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props}
                        deleteLocation={this.deleteLocation}
                        locations={this.state.locations}
                    />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                        deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals} />
                }} />

                {/* // Our shiny new route. We pass employees to the AnimalForm so a dropdown can be populated  */}
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                        deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals}
                    />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList
                        employees={this.state.employees}
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props}
                        deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees}
                    />
                }} />
            </React.Fragment>
        )
    }
}
