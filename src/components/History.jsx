import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const History = () => {
    const [local,setLocal] = useState([{}]);
   

    useEffect(() =>{
        const storedData = localStorage.getItem("arr");
          setLocal(JSON.parse(storedData));
        console.log(local)
    },[])


  return (
    <>
    <div className='flex ml-10 mt-5 sticky top-2'>
        <Link className='hover:text-gray-700 text-xl bg-gray-200 p-2 rounded-3xl' to="/"> <FaArrowLeft/></Link>
    </div>
        <h1 className='font-bold text-3xl text-gray-700 text-center'>History</h1>
        {  
            local.length > 0 ? (
                local.slice(1).map((items,index) =>(
                    
                    <div className="flex justify-center flex-col p-6 mb-10 bg-gray-100 m-4 rounded-md" key={index}>
                        <div className="flex gap-2 items-center">
                            <p className="text-green-500 font-bold text-lg">Link : </p>
                            <a href={items.link} className="text-blue-700 hover:text-blue-400">{items.link}</a>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mt-4 text-green-500">Summary : </h1>
                            <p className="text-pretty p-4">{items.para}</p>
                        </div>
                    </div>
                    ))
            ) : (
            <h1>Nothing Found</h1>
            ) 
        }
   </>
  )
}

export default History