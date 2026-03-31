import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Home =()=>{
    return(
        <div className='home'>
          
            <ul className='flex gap-3 justify-center py-3 px-2 text-white shadow-blue-100'> 
               <Link to='/'> <li>Home</li> </Link>
                <Link to='/todolist'> <li>To Do List</li> </Link>
                <Link to='/stopwatch'><li>Stop Watch</li> </Link>
                <Link to='/trafficlight'><li>Taffic </li> </Link>
                 <Link to='/signup'> <li>Sign Up</li> </Link>
            </ul>
            <Outlet />
        </div>
    );
}

export default Home;