import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StartIcon from '@mui/icons-material/Start';


const Formid = (props) => {
  const navigate = useNavigate();

  return (
    <div className='outid'>
      <h1>Name: {props.first}</h1>
      <h2>Email: {props.second}</h2>
      <h2>Address: {props.third}</h2>
      <h2>Age: {props.age}</h2>
      <div className='outbutt'>
        <button id='outone' onClick={() => props.call(props.id)}><DeleteIcon/></button>
        <button id='outtwo' onClick={() => navigate(`/edit/${props.id}`)}><EditIcon/></button>
        <button id='outthree' onClick={()=> navigate(`/Details/${props.id}`)}><StartIcon/></button>
      </div>
    </div>
  );
};

export default Formid;
