import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Formpage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>This is Form page you have just clicked int!!!!!!!!!</h1>
        <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}
export default Formpage;