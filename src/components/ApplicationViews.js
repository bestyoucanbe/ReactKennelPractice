

import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import OwnerManager from '../modules/OwnerManager'
import AnimalDetail from './animal/AnimalDetail'


class ApplicationViews extends Component {

  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: []
  }
      componentDidMount() {
        //Each manager section contains the API calls to the database
        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })

        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })

        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })

        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
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

// The deleteEmployee function is defined here (and then passed to the EmployeeList component)
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(employees => employees.json())
        .then(employees => this.setState({
            employees: employees
        })
        )
    }

// The deleteOwner function is defined here (and then passed to the OwnerList component)
    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(owners => owners.json())
        .then(owners => this.setState({
            owners: owners
        })
        )
    }

    render() {
        return (
          <React.Fragment>
            <Route
              exact
              path="/"
              render={props => {
                //The path is / and represents the default location--requires the <exact path> descriptor!
                return <LocationList locations={this.state.locations} /> // State is being passed to locations
              }}
            />
            <Route
              exact
              path="/animals"
              render={props => {
                // The deleteAnimal function is being passed to the AnimalList component.
                return (
                  <AnimalList
                    deleteAnimal={this.deleteAnimal}
                    animals={this.state.animals}
                  />
                )
              }}
            />
            <Route
              path="/animals/:animalId(\d+)"
              render={props => {
                // Find the animal with the id of the route parameter
                let animal = this.state.animals.find(
                  animal =>
                    animal.id === parseInt(props.match.params.animalId)
                )

                // If the animal wasn't found, create a default one
                if (!animal) {
                  animal = {
                    id: 404,
                    name: "404",
                    breed: "Dog not found"
                  }
                }

                return (
                  <AnimalDetail
                    animal={animal}
                    deleteAnimal={this.deleteAnimal}
                  />
                )
              }}
            />
            <Route
              path="/employees"
              render={props => {
                // The deleteEmployee function is being passed to the EmployeeList component.
                return (
                  <EmployeeList
                    deleteEmployee={this.deleteEmployee}
                    employees={this.state.employees}
                  />
                )
              }}
            />
            <Route
              path="/owners"
              render={props => {
                // The deleteOwners function is being passed to the OwnerList component.
                return (
                  <OwnerList
                    deleteOwner={this.deleteOwner}
                    owners={this.state.owners}
                  />
                )
              }}
            />
          </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)