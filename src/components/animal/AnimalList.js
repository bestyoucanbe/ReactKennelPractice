import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import { Link } from "react-router-dom"
import "./Animal.css"

export default class AnimalList extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {/* Get the dog picture, attach the animal's name and a button whose onclick property deletes that specific animal*/}
                                <img src={dog} className="icon--dog" alt=""/>
                                <h5>{animal.name}</h5>
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}
