import React, { Component } from "react";
import employees from "../employees.json";



class TableData extends Component {
    state = {
        employees
    };


    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> <button onClick={() => sortf("name")}>Name</button></th>
                        <th>Occupation</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
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
}
function sortf(props) {
    // const {employees} =  props;
    // let sortedEmployees = [...employees];
    // sortedEmployees.sort((a, b) => {
    //     if(a.name < b.name) {
    //         return -1;
    //     }
    //     if(a.name > b.name) {
    //         return 1;
    //     }
    //     return 0
    // });
    console.log(employees);
    };
    



export default TableData;