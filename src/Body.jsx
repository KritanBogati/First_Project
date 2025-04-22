import React, { useEffect, useState } from 'react'
import Formid from './formid';
import AddIcon from '@mui/icons-material/Add';

export const Body = () => {

  const [namee, getname] = useState({ fname: "", email: "", age: 0, addres: "" })

  function Callname(event) {
    const { name, value } = event.target;
    getname(prevvalue => ({ ...prevvalue, [name]: value }))
  }

  const [addbut, getbut] = useState(() => {
    const store = localStorage.getItem("list")
    return store ? JSON.parse(store) : [];
  })

  useEffect(() => { localStorage.getItem("list", JSON.stringify(addbut)) }, [addbut])

  function Callbut() {

    if (namee.fname == "" || namee.email == "" || namee.addres == "" || namee.age == "") {
      return (alert("Please Fill the Form"), getname({ fname: "", email: "", age: 0, addres: "" }))

    }
    else {
      const add = [...addbut, namee]
      getbut(add)

      localStorage.setItem("list", JSON.stringify(add))
      getname({ fname: "", email: "", age: 0, addres: "" });
    }
  }
  function Callingdelete(id) {
    const delreturn = addbut.filter((val, index) => index !== id);
    getbut(delreturn)

    localStorage.setItem("list", JSON.stringify(delreturn))
  }

  const [hover, gethover] = useState(false)

  function over() {
    gethover(true)
  }
  function out() {
    gethover(false)
  }

  function Callingadd() {
    getname(prevValue => ({ ...prevValue, age: prevValue.age + 1 }))
  }

  function Callingsub() {
    getname(prevValue => ({ ...prevValue, age: prevValue.age > 0 ? prevValue.age - 1 : 0 }))
  }

  return (
    <div className='input'>
      <div className='formhead'>
        <h1>Bio Data</h1>
      </div>
      <div className='card'>
        <div className='inputt'>
          <div id='name'><h1>Name: </h1><input type="text" placeholder='Enter your Name....' value={namee.fname} onChange={Callname} name='fname' /></div>
          <div id='mail'><h1>E-mail: </h1><input type="text" placeholder='Gmail....' value={namee.email} onChange={Callname} name='email' /></div>
          <div className='address'><h1>Address: </h1><input placeholder='Address....' value={namee.addres} name='addres' onChange={Callname}></input></div>
          <div>
            <h2 id='age'>Age: {namee.age}</h2>
            <button id='add' onClick={Callingadd}>+</button>
            <button id='sub' onClick={Callingsub}>-</button>
          </div>
          <button id='submit' onMouseOut={out} onMouseOver={over} style={{ background: hover ? "#A59D84" : "#D7D3BF" }} onClick={Callbut}><AddIcon /></button>
        </div></div>

      <div className='output'>
        {addbut.map((data, index) =>
          <Formid
            key={index}
            id={index}
            first={data.fname}
            second={data.email}
            third={data.addres}
            call={Callingdelete}
            age={data.age}
          />)}
      </div>
    </div>

  )
}

export default Body;