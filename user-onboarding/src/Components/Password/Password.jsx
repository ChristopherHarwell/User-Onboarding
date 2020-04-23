import React from 'react';

const Password = (props) => {
    return (
        <React.Fragment>
        <label htmlFor='password'>
            Password:
            <input
                id='password'
                type='password'
                name='password'
                value={props.value}
                onChange={props.input}
            />
        </label>
        <br/>
    </React.Fragment>
    );
};

export default Password;