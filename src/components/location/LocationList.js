
import React, { Component } from "react"
import "./Location.css"
import LocationCard from "./LocationCard"


export default class LocationList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="locationButton">
                <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("locations/new")}
                            }>
                        New Location
                    </button>
                </div>
                <section className="kennelLocations">
                {
                    this.props.locations.map(kennelLocations=>
                        <LocationCard key={kennelLocations.id} kennelLocations={kennelLocations} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}
