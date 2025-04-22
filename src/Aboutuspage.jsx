import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Aboutuspage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>This is About us page you have logged into!!!!!!!!!!</h1>
        <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}
export default Aboutuspage;