import React from 'react';

const Email = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='email'>
                Email:
                <input
                    type='text'
                    name='email'
                    value={props.value}
                    onChange={props.input}
                />
            </label>
            <br/>
        </React.Fragment>
    );
};

export default Email;