import React from "react";

function Table(props) {
    const employees = props.employees.map(employee => 
        <tr key={employee.id}>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email}</td>
            <td>{employee.job_title}</td>
        </tr>
    )

    return (
        <div>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Job Title</th>
                    </tr>
                </thead>
                <tbody>
                    {employees}
                </tbody>
            </table>
        </div>
    )
}

export default Table;