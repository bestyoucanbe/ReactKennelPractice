// Practice Exercise - Displaying Animals
// Now that you are passing state from the Kennel to the EmployeeList and LocationList, you're going to list animals now.

// Create a new array in state in the Kennel component named animals. It will look just like the locations and employees arrays in state. Make sure each animal has an id property.
// Create an AnimalList component for displaying animals.
// Update Kennel to pass its animals state to AnimalList and use the appropriate key on this.props to display all animal names.

import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "./Kennel.css"

export default class Kennel extends Component {

employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
]

locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
]

animalsFromAPI = [
    { id: 1, name: "Fido" },
    { id: 2, name: "Spot" },
    { id: 3, name: "Cleo" },
    { id: 4, name: "Lucy" },
    { id: 5, name: "Bruno"},
    { id: 6, name: "Sara"}
]

state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
}

    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </div>
        )
    }
}