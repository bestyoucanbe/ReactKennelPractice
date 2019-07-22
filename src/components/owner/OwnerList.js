import React, { Component } from 'react'
import theowner from "./Owner.png"
import "./Owner.css"

export default class OwnerList extends Component {
    render () {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {/* Get the owner picture, attach the owner's name and a button whose onclick property deletes that specific owner*/}
                                <img src={theowner} className="icon--theowner" alt=""/>
                                <h5>{owner.name}</h5>
                                <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
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