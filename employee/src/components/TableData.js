import React from "react";
import employees from "../employees.json"

function TableData() {
    return (
        <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Occupation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {employees.map(employee => (
            <tr>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.occupation}</td>
                <td>{employee.email}</td>
            </tr>
        ))}
        </tbody>
        </table>
    )
}

export default TableData;