import {useState} from 'react';

const Form = () => {

    //State for form
    const [search, setsearch] = useState({
        city: '',
        country: ''
    });
    const {city, country} = search;

    //State for validations
    const [error, seterror] = useState(false);

    //Handlers
    const handleChange = e => {
        setsearch({
            ...search,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(city.trim() === '' || country.trim() === ''){
            seterror(true);
            return;
        }
        seterror(false);
    }

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
            <div className = 'input-field col s12'>
                <select
                    name ='country'
                    id ='country'
                    value = {country}
                    onChange = {handleChange}
                >
                    <option value = ''>---Select a country---</option>
                    <option value = "US">Estados Unidos</option>
                    <option value = "MX">México</option>
                    <option value = "AR">Argentina</option>
                    <option value = "CO">Colombia</option>
                    <option value = "CR">Costa Rica</option>
                    <option value = "ES">España</option>
                    <option value = "PE">Perú</option>
                </select>
                <label htmlFor='country'>City: </label>
            </div>

            <div>
                <input 
                    type = 'submit'
                    value = 'Check the weather'
                    className ='waves-effect waves-light btn-large btn-block green accent-4'
                />
            </div>
        </form>
    );
}

export default Form;