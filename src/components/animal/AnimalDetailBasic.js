import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"
import EmployeeCard from "../employee/EmployeeCard";


export default class AnimalDetailBasic extends Component {
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
                        
                    </div>
                </div>
            </section>
        )
    }
}