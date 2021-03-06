import {useState} from 'react';

const Form = ({search, setsearch, setrequest, setspinner}) => {

    const {city} = search;

    //State for validations
    const [error, seterror] = useState(false);

    //Handlers
    const handleChange = e => {
        setsearch({
            ...search,
            [e.target.name] : e.target.value,
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(city.trim() === ''){
            seterror(true);
            return;
        }
        seterror(false);
        setspinner(true);
        setrequest(true);
    };

    return (
        <form
            onSubmit={handleSubmit}
        >
            {
                error
                    ? <p className ='error red darken-4'>All fields are required</p>
                    : null
            }
            <div className = 'input-field col s12'>
                <input
                    type ='text'
                    name ='city'
                    id ='city'
                    value = {city}
                    onChange = {handleChange}
                />
                <label htmlFor = 'city'>City: </label>
            </div>
            <div className='center'>
                <button 
                    type = 'submit'
                >Check the wheater</button>
            </div>
        </form>
    );
}

export default Form;