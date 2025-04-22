import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditForm = () => {
    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate(); // For going back after saving

    const [input, setInput] = useState({fname: '', email: '', addres: '', age: 0});

    // Load the selected item from localStorage
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('list') || '[]');
        const userToEdit = list[id];
        if (userToEdit) {
            setInput(userToEdit);
        }
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({...prev, [name]: name === 'age' ? Number(value) : value // Convert age to a number
        }));
    };

    // Save changes to localStorage and go back
    const handleSave = () => {
        const list = JSON.parse(localStorage.getItem('list') || '[]');
        list[id] = input; // Update the list with the new input
        localStorage.setItem('list', JSON.stringify(list)); // Save back to localStorage
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Edit Your Info</h2>
            <input name="fname" placeholder="Name" value={input.fname} onChange={handleChange}
            /><br /><br />
            <input name="email" placeholder="Email" value={input.email} onChange={handleChange}
            /><br /><br />
            <input name="addres" placeholder="Address" value={input.addres} onChange={handleChange}
            /><br /><br />
            <input type="number" name="age" placeholder="Age" value={input.age} onChange={handleChange}
            /><br /><br />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => navigate('/')}>Go Back</button>
            <br /><br />
            <div>
                <h3>Preview Of The Edit:</h3>
                <p>Name: {input.fname}</p>
                <p>Email: {input.email}</p>
                <p>Address: {input.addres}</p>
                <p>Age: {input.age}</p>
            </div>
            <br />
            <div>
                <h3>Note:</h3>
                <p>Make sure to fill all the fields before saving.</p> </div>
        </div>
    );
};

export default EditForm;