import React from 'react';


const Signup = () => {
    return (
        <form className='container'>
            <div className='form-group'>
                <label htmlFor='email'>Email Address:</label>
                <input type="email" name="email"/>
            </div>
            <div className='form-group'>
                <label htmlFor='username'>Email Address:</label>
                <input type="text" name="username"/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Email Address:</label>
                <input type="password" name="password"/>
            </div>
        </form>
    )
}

export default Signup