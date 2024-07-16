import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen">
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className="text-center md:w-1/2">
                <img className='rounded-3xl' src="https://i.ibb.co/xF8vLvp/3eaf318fb223ea98a7f8820638cc3f84.jpg" alt="" />
          </div>
          <div className="md:w-1/2 border border-primary rounded-2xl">
          <h1 className="text-4xl font-bold pt-4">Login now!</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;