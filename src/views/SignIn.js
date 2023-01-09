import './SignIn.css'
import userAPI from '../api/user';
import React from 'react';

const SignIn = () => {
    const [form, setValue] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setValue({ ...form, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = {
            "email": form.email,
            "password": form.password
        }
        userAPI.signIn(formData);
	};

    return (
        <div className='Form'>
            <form onSubmit={onSubmit} style={{textAlign: 'center'}}>
                <div className="form-group">
                    <label htmlFor="input-email">Email : </label>
                    <input id="input-email" type="email" name="email" value={form.email} onChange={handleChange} className="form-input" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password : </label>
                    <input id="input-password" type="password" name="password" value={form.password} onChange={handleChange} className="form-input" required/>
                </div>
                <button style={{marginTop: '10px'}} type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default SignIn;