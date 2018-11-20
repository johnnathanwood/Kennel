import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export default class LocationCard extends Component {
    render() {
        return (
            <div key={this.props.location.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.location.name}
                        <Link className="nav-link" to={`/locations/${this.props.location.id}`}>Details</Link>
                        <a href=" "
                            onClick={() => this.props.deleteLocation(this.props.location.id)}
                            className="card-link">MOVED</a>
                    </h5>
                </div>
            </div>
        )
    }
}