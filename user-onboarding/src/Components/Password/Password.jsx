import React from 'react';

const Password = (props) => {
    return (
        <React.Fragment>
        <label htmlFor='password'>
            Password:
            <input
                type='password'
                name='password'
            />
        </label>
        <br/>
    </React.Fragment>
    );
};

export default Password;