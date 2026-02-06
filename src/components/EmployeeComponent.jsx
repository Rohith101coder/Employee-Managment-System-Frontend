import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const[firstName, setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');

    const{id} = useParams();
    const[errors,setErrors]=useState({
        firstName:'',
        lastName:'',
        email:''
    })
    const navigator=useNavigate('');

    // function handleFirstName(e){
    //     setFirstName(e.target.value);
    // }
    // function handleLastName(e){
    //     setLastName(e.target.value);
    // }
    // function handleEmail(e){
    //     setEmail(e.target.value);
    // }

    function saveEmployee(e){
        e.preventDefault();
        if(validateForm()){
             const employee={firstName,lastName,email}
        console.log(employee)

        createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator('/employees')
        })
        }
       
    }

    function validateForm(){
        let valid=true;
        const errorscopy={...errors}
        if(firstName.trim()){
            errorscopy.firstName='';
        }else{
            errorscopy.firstName='First name is rquired';
            valid = false;
        }
        if(lastName.trim()){
            errorscopy.lastName='';
        }else{
            errorscopy.lastName='last name is rquired';
            valid = false;
        }
        if(email.trim()){
            errorscopy.email='';
        }else{
            errorscopy.email='email is rquired';
            valid = false;
        }

        setErrors(errorscopy);
        return valid;
    }

    function pageTitle(){
      if(id){
        return <h2 className="text-center">update Employee</h2>;
      }else{
        <h2 className="text-center">Add Employee</h2>;
      }
    }

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
               {
                pageTitle()
               }
                <input
                  type="text"
                  placeholder="enter employee first name "
                  name="firstName"
                  value={firstName}
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">
                  Employee Last Name:
                </label>
                <input
                  type="text"
                  placeholder="enter employee last name "
                  name="lastName"
                  value={lastName}
                  className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="enter employee email "
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <button className="btn btn-success" onClick={saveEmployee}>
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent
