import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData=[
        {
            "id":1,
            "firstName":"A",
            "lastName":"penta",
            "email":"A@gmail.com"
        },
        {
            "id":2,
            "firstName":"B",
            "lastName":"kuppa",
            "email":"B@gmail.com"
        },
        {
            "id":3,
            "firstName":"C",
            "lastName":"kappa",
            "email":"C@gmail.com"
        }
    ]
  return (
    <div className='container'>
      <h2 className='text-center'>List of employees</h2>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Emial</th>
            </tr>
        </thead>
        <tbody>
            {
                dummyData.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
