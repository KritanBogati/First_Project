import React from 'react'
import { useNavigate } from 'react-router-dom';
import Formid from './formid';

export const Details = () => {
  const Navigate = useNavigate();
  function Callde() {
    Navigate(`/`)
  }

  const getstoredvalue = localStorage.getItem("list");
  const showstoredvalue = getstoredvalue ? JSON.parse(getstoredvalue) : [];
  return (
    <div>
      <h1>This is a Detail Page of the input your entered before</h1>
      <button onClick={Callde}>Click to Go back!!</button>
      <div className='detailsdisp'>
        {showstoredvalue.map((data, index) => (
        <Formid
          key={index}
          first={data.fname}
          second={data.email}
          third={data.addres}
          age={data.age}
        />
      ))}
      </div>


    </div>
  )
}
export default Details;
