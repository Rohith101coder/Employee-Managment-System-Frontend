import React, { useState } from 'react'

const EmployeeComponent = () => {

    const[firstName, setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');

    function handleFirstName(e){
        setFirstName(e.target.value);
    }
    function handleLastName(e){
        setLastName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }

    function saveEmployee(e){
        e.preventDefault();

        const employee={firstName,lastName,email}
        console.log(employee)
    }

  return (
    <div className='container'>
      <div className="row">
        <div className="card">
            <h2 className='text-center'>Add Employee</h2>
            <div className="card-body">
                <form action="">
                    <div className="form-group mb-2">
                        <label htmlFor="" className='form-label'>Employee First Name:</label>
                        <input type="text"
                        placeholder='enter employee first name '
                        name='firstName'
                        value={firstName}
                        className='form-control'
                        onChange={handleFirstName}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="" className='form-label'>Employee Last Name:</label>
                        <input type="text"
                        placeholder='enter employee last name '
                        name='lastName'
                        value={lastName}
                        className='form-control'
                        onChange={handleLastName}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="" className='form-label'>Email:</label>
                        <input type="email"
                        placeholder='enter employee email '
                        name='email'
                        value={email}
                        className='form-control'
                        onChange={handleEmail}
                        />
                    </div>

                    <button className='btn btn-success' onClick={saveEmployee}>submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
