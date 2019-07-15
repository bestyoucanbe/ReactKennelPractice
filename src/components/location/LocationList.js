//Instructions--Practice Exercise - Displaying Locations
// Update your application so that the array of locations is passed from the Kennel state to the props of LocationList. Then use the map() method to display all location names.

import React, { Component } from 'react'


export default class LocationList  extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                        {location.address}
                    </div>
                )
            }
            </section>
        )
    }
}
