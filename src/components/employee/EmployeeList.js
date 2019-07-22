import React, { Component } from 'react'
import theperson from "./Employee.png"
import "./Employee.css"

export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {/* Get the employee picture, attach the employee's name and a button whose onclick property deletes that specific employee*/}
                                <img src={theperson} className="icon--theperson" alt=""/>
                                <h5>{employee.name}</h5>
                                <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
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