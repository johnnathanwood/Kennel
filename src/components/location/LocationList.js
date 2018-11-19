import React, { Component } from 'react';


export default class LocationList extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    render() {
         return(
            <section className="locations">
  
                <h2>Our Locations</h2>
                {
                this.props.locations.map(location =>
                    <div key={location.id} className="card">
                        <div id={`location--${location.id}`} key={location.id}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <h4>{location.name}</h4>
                                    <p>{location.address}</p>
                                    <p>{location.city}</p>
                                    <button onClick={() => this.props.deleteLocation(location.id)}
                                        className="card-link">Delete</button>
                                </h5>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
         ) 
    }
}