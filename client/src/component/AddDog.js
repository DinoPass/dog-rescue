import React, { useState } from 'react';
import axios from 'axios';

function AddDog() {
    const [dog, setDog] = useState(
        {
            size: '',
            breed: '',
            weight: '',
            age: '',
            color: ''
        }
    );

    const handleChange = event => {
        setDog({ ...dog, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        axios.post('http://localhost:3001/dogs', dog);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Breed:
                    <input type="text" name="breed" id="breed" value={dog.breed} onChange={handleChange} />
                </label>
                <label>
                    Size:
                    <input type="text" name="size" id="size" value={dog.size} onChange={handleChange} />
                </label>
                <label>
                    Age:
                    <input type="text" name="age" id="age" value={dog.age} onChange={handleChange} />
                </label>
                <label>
                    Color:
                    <input type="text" name="color" id="color" value={dog.color} onChange={handleChange} />
                </label>
                <label>
                    Weight:
                    <input type="text" name="weight" id="weight" value={dog.weight} onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddDog;