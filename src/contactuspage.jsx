import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Contactuspage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>This is Contact Us pahe you have clicked into!!!!!</h1>
        <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}
export default Contactuspage;
