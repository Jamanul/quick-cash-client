import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [pin, setPin] = useState(new Array(5).fill(""));
  const { handleRegisterUser, user } = useContext(AuthContext);
  const handleOnChange = (e, index) => {
    if (isNaN(e.target.value)) return false;
    setPin([
      ...pin.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  const handleOnKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !pin[index]) {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
      setPin([
        ...pin.map((data, indx) => (indx === index - 1 ? "" : data)),
      ]);
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const newPin =pin.join("")
    const password = newPin
    //console.log(name,phoneNumber,password)
    const userDetails = {
      name,
      phoneNumber,
      password,
      email,
    };
    handleRegisterUser(userDetails);
  };
  // const userFromLS= localStorage.getItem('user')
  // console.log(JSON.parse(userFromLS))
  // console.log(user?.email)
  return (
    <div className="hero min-h-screen">
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="text-center md:w-1/2">
          <img
            className="rounded-3xl h-[590px]"
            src="https://i.ibb.co/xF8vLvp/3eaf318fb223ea98a7f8820638cc3f84.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 border border-primary rounded-2xl">
          <h1 className="text-4xl font-bold pt-4">Register</h1>

          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your phone Number</span>
              </label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Your phone Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="grid gap-2 grid-cols-5">
              {pin.map((data, i) => {
                return (
                  
                    <input
                      key={i}
                      type="password"
                      name="password"
                      value={data}
                      maxLength={1}
                      onChange={(e) => handleOnChange(e, i)}
                      onKeyDown={(e) => handleOnKeyDown(e, i)}
                      className="input w-14 input-bordered"
                      required
                    />
              
                );
              })}
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-primary text-white">Login</button>
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-primary">Login here !!!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
