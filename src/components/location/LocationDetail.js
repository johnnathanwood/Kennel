import React, { Component } from "react"
import "./Location.css"



export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const kennelLocations = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="location">
                <div key={kennelLocations.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {kennelLocations.name}
                        </h4>
                        <h6 className="card-title">{kennelLocations.address}</h6>
                        <a href=" "
                            onClick={() => this.props.deleteLocation(kennelLocations.id)
                                .then(() => this.props.history.push("/locations"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}