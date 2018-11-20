import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export default class LocationCard extends Component {
    render() {
        return (
            <div key={this.props.kennelLocations.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.kennelLocations.name}
                        <Link className="nav-link" to={`/locations/${this.props.kennelLocations.id}`}>Details</Link>
                        <a href=" "
                            onClick={() => this.props.deleteLocation(this.props.kennelLocations.id)}
                            className="card-link">MOVED</a>
                    </h5>
                </div>
            </div>
        )
    }
}