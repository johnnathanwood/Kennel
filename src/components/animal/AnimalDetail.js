import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"
import EmployeeCard from "../employee/EmployeeCard";


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={dog} className="icon--dog" />
                            {animal.name}
                        </h4>
                        <h6 className="card-title">{animal.breed}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Caretaker:</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.employees
                                    .filter(employee => employee.animalId === animal.id)
                                    .map(employee => <EmployeeCard key={employee.id} employee={employee} {...this.props} />)
                            }
                            </div>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}