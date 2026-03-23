import React from 'react';
import { MdLockOutline, MdOutlineMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <div className="hero  min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left space-y-4 space-x-3">
                            <h1 className="lg:text-5xl text-3xl font-bold">Welcome Back to you!</h1>
                            <p>
                                Sign in or login is the process of authenticating your identity to access an online account,
                                app, or service, typically by providing a username and password.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter Email</span>
                                    </label>
                                    <div className="relative">
                                        <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600" />
                                        <input type="email" name="email" placeholder="Enter Email Address" className="input input-bordered w-full pl-10" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600" />
                                        <input type="password" name="password" placeholder="Enter Password" className="input input-bordered w-full pl-10" required />
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-700 w-full hover:bg-orange-600 text-white">Sign In</button>
                                    <p className="text-center mt-4">
                                        Don't have an account? <Link to="/signUp" className="text-orange-600 hover:underline font-semibold">Create Account</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;