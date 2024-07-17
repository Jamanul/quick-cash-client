import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  
    const {handleRegisterUser,user}=useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault()
        const form =e.target  
        const name = form.name.value
        const phoneNumber = form.phoneNumber.value
        const email = form.email.value
        const password =form.password.value
        //console.log(name,phoneNumber,password)
        const userDetails ={
            name,
            phoneNumber,
            password,
            email
        }
        handleRegisterUser(userDetails)
    }
    //const userFromLS= localStorage.getItem('user')
    //console.log(JSON.parse(userFromLS))
    //console.log(user?.email)
    return (
        <div className="hero min-h-screen">
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className="text-center md:w-1/2">
                <img className='rounded-3xl h-[590px]' src="https://i.ibb.co/xF8vLvp/3eaf318fb223ea98a7f8820638cc3f84.jpg" alt="" />
          </div>
          <div className="md:w-1/2 border border-primary rounded-2xl">
          <h1 className="text-4xl font-bold pt-4">Register</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your phone Number</span>
                </label>
                <input type="number" name='phoneNumber' placeholder="Your phone Number" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white">Login</button>
              </div>
            </form>
            <p>Already have an account? <Link to={'/login'}><span className='text-primary'>Login here !!!</span></Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;