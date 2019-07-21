// Instructions for this Practice:

//Set up the delete functionality using a delete function defined in the ApplicationViews, refactor the Route to pass the function to the AnimalList child element and then refactor the AnimalList component to show an animal card containing a delete button.

import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


export default class ApplicationViews extends Component {

  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: []
  }
      componentDidMount() {
        const newState = {} //An empty object to hold the data for each array in the state object

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => this.setState(newState))  //After each resource is brought back this sets the state and causes the re-rendering!
    }
// The deleteAnimal function is defined here (and then passed to the AnimalList component)
    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(animals => animals.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => { //The path is / and represents the default location--requires the <exact path> descriptor!
                    return <LocationList locations={this.state.locations} />// State is being passed to locations
                }} />
               <Route exact path="/animals" render={() => {
                // The deleteAnimal function is being passed to the AnimalList component.
                    return <AnimalList deleteAnimal={this.deleteAnimal}
                                        animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

