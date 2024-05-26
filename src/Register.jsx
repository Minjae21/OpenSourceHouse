import { useState } from 'react';

function Register() {

    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
      };

  return (
    <>
        <div className="register-container">
          <form onSubmit={handleSubmit}>
          <div className="form-control">
              <p className='text-sm font-semibold leading-6 text-white-900'>Username</p>
              <input className="register-input"
                type="text"
                name="username"
                value={state.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <p className='text-sm font-semibold leading-6 text-white-900'>Email</p>
              <input className="register-input"
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
                <p className="text-sm font-semibold leading-6 text-white-900">Password</p>
              <input className="register-input"
                type="password"
                name="password"
                value={state.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="register-btn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        </>
  );
}

export default Register;
