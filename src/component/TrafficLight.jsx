import React,{useEffect, useState} from 'react';

const TrafficLight = () =>{

    const [color,setColor] = useState('gray');
    useEffect(()=>{
     const timer =setInterval(()=>{
           setColor((prev)=>{
            if(prev === 'gray') return 'red';
             if(prev === 'red') return 'yellow';
              if(prev === 'yellow') return 'green';
               if(prev === 'green') return 'gray';
               return prev;
        });
     },200);

     return ()=>clearInterval(timer);
    },[]);
    return (
        <div className='bg-gray-500 w-15 m-3 p-4'>
            <div className={`w-8 h-8 rounded-lg mb-3 ${color === 'red' ? 'bg-red-500' : 'bg-gray-300'}`}></div>
             <div className={`w-8 h-8 rounded-lg mb-3 ${color === 'yellow' ? 'bg-yellow-500' : 'bg-gray-300'}`}></div>
              <div className={`w-8 h-8 rounded-lg mb-3 ${color === 'green' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        </div>
    )
}

export default TrafficLight;