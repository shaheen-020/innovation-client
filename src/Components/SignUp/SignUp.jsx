import React, { useContext } from 'react';
import { CiUser } from 'react-icons/ci';
import { MdLockOutline, MdOutlineMail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProviders';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { name, email, password };
        console.log(newUser);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "User created successfully!",
                                icon: "success",
                                draggable: true
                            });
                            form.reset();
                        }
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='bg-base-100 py-10'>
            <div className='w-10/12 mx-auto'>
                <div className="hero  min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left space-y-4 space-x-3">
                            <h1 className="lg:text-5xl text-3xl font-bold">Create An Account!</h1>
                            <p>
                                A sign-up is the process of registering for an online account or service,
                                typically requiring a username, email, and password to secure access.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Enter Name</span>
                                    </label>
                                    <div className="relative">
                                        <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-700" />
                                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full pl-10" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Enter Email</span>
                                    </label>
                                    <div className="relative">
                                        <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600" />
                                        <input type="email" name="email" placeholder="Enter Email Address" className="input input-bordered w-full pl-10" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <div className="relative">
                                        <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600" />
                                        <input type="password" name="password" placeholder="Enter Password" className="input input-bordered w-full pl-10" required />
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-700 w-full hover:bg-orange-600 text-white">Create My Account</button>
                                    <p className="text-center mt-4 font-semibold">
                                        Already have an account? <Link to="/signIn" className="text-orange-600 hover:underline font-semibold">Sign In</Link>
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

export default SignUp;