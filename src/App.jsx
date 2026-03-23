
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import forum from "./assets/forum-logo-removebg-preview.png";
function App() {

  return (
    <>
      <div className='bg-base-200 '>
        <div className='w-10/12 mx-auto'>
          <div className="navbar">
            <div className="navbar-start">
              <a className="">
                <img className='w-20 rounded-full' src={forum} alt="" />
              </a>
            </div>
            <div className="navbar-center lg:navbar-end space-x-3">
              <Link to="/signUp">
                <button className="btn border-orange-400 border-2 text-orange-600 hover:bg-orange-500 hover:text-white rounded-2xl">Sign Up</button>
              </Link>
              <Link to="/signIn">
                <button className="btn bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 rounded-2xl">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default App
