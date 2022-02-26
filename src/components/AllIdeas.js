import React, { useEffect } from 'react'
import { getIdeas } from '../Services/api'

const AllIdeas = () => {
     useEffect (() => {
        getAllIdeas();
     },[])



    const getAllIdeas = async() =>{
       const response =await getIdeas(); 
       console.log(response);
    }
  return (
    <div>AllIdeas</div>
  )
}
export default AllIdeas;
