import React from 'react';
import SignUpForm from './component/SignUpForm.jsx';
import Home from './component/Home.jsx';
import ToDoList from './component/ToDoList.jsx';
import TrafficLight from './component/TrafficLight.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


import './App.css'


function App() {

  const routes = createBrowserRouter([{
    path: '/',
    element: <Home />,
    children:[
      {
        path: '/signup',
        element: <SignUpForm />
      },
      {
        path: '/todolist',
        element: <ToDoList/>
      },

      {
        path: '/stopwatch',
         element: <div className="text-white">stopwatch</div>
      },
      {
        path: '/trafficlight',
         element: <TrafficLight/>
      }
    ]
  }]);

  return (
   
    <RouterProvider router={routes} />
  
   
  )
}

export default App;
