import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/api/login', { email, password });
        if (response.data.success) {
          // Save token or user data if needed
          // Redirect to the home page or another protected page
          history.push('/home');
        } else {
          setErrors({ general: 'Invalid email or password' });
        }
      } catch (error) {
        setErrors({ general: 'An error occurred. Please try again.' });
      }
    } else {
      setErrors(newErrors);
    }
  };


  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
          <div className="md:flex w-full">
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-5">
                <h1 className="font-extrabold text-3xl text-gray-900">LOGIN</h1>
                <p className='mt-10 font-bold text-lg text-gray-500'>Enter your credentials to login</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-2 ml-2">{errors.email}</p>}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="password" className="text-xs font-semibold px-1">Password</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        id="password"
                        className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-2 ml-2">{errors.password}</p>}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button type="submit" className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      LOGIN
                    </button>
                    <div className='mt-3 pl-1 text-center'>
                      <h3 className='mb-3'>Don't have an Account?</h3> 
                      <Link to="/" className='text-blue-800 font-extrabold'>
                        Create an Account<i className='bx bx-right-arrow-alt font-extrabold m-1'></i>
                      </Link>
                    </div>
                    <Link to='/home'>
                      <h1 className="text-indigo-500 text-center text-xl md:text-4xl font-serif font-bold underline mt-24 cursor-pointer">
                        Book<span className="text-red-500">A</span>Bed
                      </h1>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <img 
                src="https://cdn3.iconfinder.com/data/icons/hotel-service-staff-chef-waiter-and-receptionist/66/47-256.png" 
                alt="Background"
                style={{ width: '100%', height: 'full' }}
              />           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
